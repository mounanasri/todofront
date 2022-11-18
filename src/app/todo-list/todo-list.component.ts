import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo';
import { TodoFormComponent } from 'src/app/todo-form/todo-form.component';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  show: boolean = false;
  todos: Todo[] = [];
  todoForm: TodoFormComponent = new TodoFormComponent(this.todosService);

  constructor(public todosService: TodosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    {
      this.todosService.getTodos().subscribe((todos) => {
        console.log(todos);
        this.todos = todos;
      });
    }
  }

  delete(todo: Todo) {
    this.todosService.deleteTodo(todo.todo_id).subscribe((todo: Todo) => {
      for (let i = 0; i <= this.todos.length; i++) {
        if (todo == this.todos[i]) {
          this.todos.splice(i, 1);
        }
      }
    });
    window.location.reload();
  }

update(todo: Todo) {
//   this.router.navigate(['/edit/'], {
//     queryParams: { todo: todo}
//  });
//this.route.navigate(['/edit']);

}

  toogleShow() {
    this.show = !this.show;
  }
}
