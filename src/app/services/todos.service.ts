import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getTodos(){
    return this.http.get<Todo[]>(this.apiUrl+'/todos')
   }

  deleteTodo(todo_id : number){
    return this.http.delete<Todo>(this.apiUrl+'/todos/'+ todo_id.toString())
   }

 addTodo(todo: Todo){
  return this.http.post<Todo>(this.apiUrl+'/todos',todo)
 }




}
