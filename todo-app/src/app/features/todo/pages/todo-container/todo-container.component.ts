import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.interface';
import { ManageTodoService } from '../../services/manage-todo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  constructor(private todoService: ManageTodoService) {}
  todoList: any;
  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
  }

  onTodoAdded(todoAdded: boolean) {
    if (todoAdded) {
      this.todoList = this.todoService.getTodoList();
    }
  }
}
