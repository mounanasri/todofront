import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: any;
  // value= '';
  // inputValue: any;
  // openSnackBar: any;
  // todo: any;
  viewList: boolean = true;


   opened = false;

  // nn = { "desc" : "", titre: "", date : "", description: ""};


  constructor(public todosService: TodosService, public route: ActivatedRoute) {}


  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos) => {
      console.log(todos);
      console.log(typeof todos);
      this.todos = todos;
    });

    console.log()
    console.log(this.todos);
  }
  // addNewItem() {
  //   if (this.inputValue.content != "") {
  //     this.inputValue.datemodified = new Date();
  //     this.inputValue.isDone = false;
  //     this.todosService.create(this.inputValue);
  //     this.inputValue.content = "";
  //   }
  // }



//   addTodo(value: any) {
//     this.todosService.create(value).subscribe(() => {
//     if (value !== "") {
//       this.todos.push(value);
// console.log(this.value)
//     } else {

//     }
//   });

  // public close() {
  //   this.opened = false;
  // }

  public open() {
    this.opened = true;
  }



  deleteItem(todo: Todo) {
    this.todosService.deleteTodo(todo.todo_id).subscribe((todo) => {
      for (let i = 0; i <= this.todos.length; i++) {
        if (todo == this.todos[i]) {
          this.todos.splice(i, 1);
        }
      }
    });
    window.location.reload();
  }

  // updateTodo(todo : Todo) {
  //   this.todosService.updateTodo(todo.todo_id).subscribe((todo: any) => {
  //     {
  //       this.getTodos();
  //     }


  //     });
  // }

//   todoSubmit(value:any){
//        if(value!==""){
//           this.todos.push(value.todo)
//               }else{
//                     alert('**')    }      }







}
