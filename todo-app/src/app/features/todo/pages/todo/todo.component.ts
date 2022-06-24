import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todo.interface';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: ManageTodoService) {}
  @Output() todoUpdated = new EventEmitter<boolean>();
  private _todo: Todo = <Todo>{};
  public get todo(): Todo {
    return this._todo;
  }
  @Input()
  public set todo(value: Todo) {
    this._todo = value;
  }
  ngOnInit(): void {}
  updateTaskAsComplete(id: number) {
    this.todoService.updateTodoAsComplete(id).subscribe((x) => {
      this.todoUpdated.emit(true);
    });
  }

  deleteTask(id: number) {
    this.todoService.deleteTodoTask(id).subscribe((x) => {
      this.todoUpdated.emit(true);
    });
  }
}
