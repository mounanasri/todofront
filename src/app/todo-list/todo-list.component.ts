import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo'
import {TodoFormComponent} from 'src/app/todo-form/todo-form.component'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  show: boolean = false;
  todos: Todo[] = [];
  todoForm: TodoFormComponent = new TodoFormComponent(this.todosService)

  constructor(public todosService: TodosService ){}

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


    toogleShow() {
      this.show= !this.show;
  }



}


