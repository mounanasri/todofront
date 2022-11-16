import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {  Route } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';


// const routes: Route[] = [

//     {path: "", component: TodoListComponent},
//     {path: "addtodo", component: TodoFormComponent}



// ];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
