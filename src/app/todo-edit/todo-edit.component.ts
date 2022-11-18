import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodosService } from '../services/todos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  id: number = 0;
titre: string = '';
statut: string ='';
date: string ='';
description: string ='';
  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}

  onSubmit(): void {
   alert('coucou');
   let monTodo: Todo = new Todo (this.id, this.titre,this.statut,this.date,this.description);
   this.todosService.editTodo(monTodo).subscribe((todo :Todo) => {
    console.log(todo)
    window.location.reload();

 })
  }
}
