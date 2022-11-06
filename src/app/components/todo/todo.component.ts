import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '@prisma/client';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 public todos$: Observable<Todo[]>;




  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
     this.todos$ = this.todosService.getTodos();
  }

}
