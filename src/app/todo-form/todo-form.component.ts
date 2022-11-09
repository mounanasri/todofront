import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: []
})
export class TodoFormComponent implements OnInit {

  todos: Todo[] = [];
  submitted= false;
  todo: Todo[] = [];




  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }


addTodo(todo: Todo){

  this.todosService.create(todo).subscribe(()=>{
    console.log(this.todo)
  })


    }
  }

