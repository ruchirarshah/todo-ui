import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;
  @Output() todoAdded = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private todoService: ManageTodoService) {
    this.todoForm = this.fb.group({ taskName: new FormControl('') });
  }

  ngOnInit(): void {}
  addTodoTask() {
    const taskName = this.todoForm.get('taskName')?.value;
    this.todoService.addTodoTask(taskName).subscribe((x) => {
      alert(
        x === true
          ? 'Todo added successfully'
          : 'Error occured while adding todo'
      );
      if (x === true) {
        this.todoAdded.emit(true);
      }
    });
  }
}
