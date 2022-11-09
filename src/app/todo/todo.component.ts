import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  // @Input() todoInput;
  @Input()
  @Input() todoInput: Todo[]= [];
  todos: Todo[] = [];
  completed: boolean = false;
  opened = false;
  todo!: Todo;


  constructor(public todoService: TodosService , public route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  deleteItem(todo: Todo) {
    this.todoService.deleteTodo(todo.todo_id).subscribe((todo) => {
      for (let i = 0; i <= this.todos.length; i++) {
        if (todo == this.todos[i]) {
          this.todos.splice(i, 1);
        }
      }
    });
    window.location.reload();
  }

  onChange() {
    console.log("changed");
  }

  // onCliCk(e: any) {
  //   console.log("Clicked");
  //   console.log(e);
  // }


  public open() {
    this.opened = true;
  }
  // toggleClass() {
  //   if (this.completed) {
  //     // return 'list-item-success';
  //     return { 'list-group-item-success': this.completed, 'border-primary': this.completed };

  //   }
  // }



}
