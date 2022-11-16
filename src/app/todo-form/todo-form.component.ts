import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Input() show: boolean = false;
id: number = 0;
titre: string = '';
statut: string ='';
date: string ='';
description: string ='';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }
  onSubmit(addTodo: NgForm): void {

    let monTodo: Todo = new Todo (this.id, this.titre,this.statut,this.date,this.description);
    this.todosService.addTodo(monTodo).subscribe((todo :Todo) => {
      console.log(todo)
      window.location.reload();
   })
  }

}



//  addTodo(montodo: Todo){


    // let montodo = new Todo
    // (190, "COUCOU",
    // "en evolution",
    // "2022-11-05T00:00:00.000Z",
    //  "ceci est un test24")
    //  console.log(montodo)

    //  this.todosService.addTodo(montodo).subscribe((todo :Todo) => {
    //   this.todos.push(todo);
    //   console.log(montodo)

  //   }
  // }
  // editTodo(montodo: Todo){

  //   // let montodo = new Todo
  //   // (190, "COUCOU",
  //   // "en evolution",
  //   // "2022-11-05T00:00:00.000Z",
  //   //  "ceci est un test24")
  //   //  console.log(montodo)

  //    this.todosService.putTodo(montodo).subscribe((todo :Todo) => {
  //     this.todos.push(todo);
  //     console.log(montodo)

  //   })
  // }
 //}
