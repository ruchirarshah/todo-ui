import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './features/todo/pages/todo/todo.component';
import { TodoListComponent } from './features/todo/pages/todo-list/todo-list.component';
import { AddTodoComponent } from './features/todo/pages/add-todo/add-todo.component';
import { TodoContainerComponent } from './features/todo/pages/todo-container/todo-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInput, MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
