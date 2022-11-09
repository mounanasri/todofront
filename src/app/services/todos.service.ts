import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  updateFav: any;
  fav: any;
  todoList: any;
  setData(todoListStorageKey: any, todoList: any) {
    throw new Error('Method not implemented.');
  }
  apiUrl = environment.apiUrl;




  constructor(private http: HttpClient) {}

  getTodos(){
   return this.http.get<Todo[]>(this.apiUrl+'/todos')
  }

   create(todo: Todo) {
    return this.http.post<Todo>( '{this.apiUrl}/todo', todo);

  }

  deleteTodo(todo_id : number){
    return this.http.delete<Todo>(this.apiUrl+'/todos/'+ todo_id.toString())
   }


  //    addTodo(titre : string) {
  //   let id = this.getTodos.length + 2;

  //   this.getTodos
  // }



}
