import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];




  constructor(private http: HttpClient) {}
  getTodos(){
   return this.http.get('https://localhost:3000/todos')
  }


}
