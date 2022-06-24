import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/Todo.interface';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  private _todoList: any;
  public get todoList(): any {
    return this._todoList;
  }

  @Input()
  public set todoList(value: Observable<Object>) {
    this._todoList = value;
  }
  constructor(private todoService: ManageTodoService) {}

  ngOnInit(): void {}

  refreshTodoList() {
    this.todoList = this.todoService.getTodoList();
  }
}
