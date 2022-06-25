import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../../models/Todo.interface';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private fb: FormBuilder, private todoService: ManageTodoService) {
    this.todoForm = this.fb.group({ todoComplete: new FormControl('') });
  }
  @Output() todoUpdated = new EventEmitter<boolean>();
  private _todo: Todo = <Todo>{};
  public get todo(): Todo {
    return this._todo;
  }
  @Input()
  public set todo(value: Todo) {
    this._todo = value;
  }
  ngOnInit(): void {
    if (this.todo.IsComplete) {
      this.todoForm.get('todoComplete')?.setValue(true);
    }
  }
  updateTaskAsComplete(id: number, taskStatus: boolean) {
    this.todoService.updateTodoAsComplete(id, taskStatus).subscribe((x) => {
      this.todoUpdated.emit(taskStatus);
    });
  }

  deleteTask(id: number) {
    this.todoService.deleteTodoTask(id).subscribe((x) => {
      this.todoUpdated.emit(true);
    });
  }

  onCompleteCheck(data: any) {
    if (data.checked === true) {
      this.updateTaskAsComplete(this.todo.Id, true);
    } else {
      this.updateTaskAsComplete(this.todo.Id, false);
    }
  }
}
