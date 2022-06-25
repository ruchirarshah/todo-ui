import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ManageTodoService {
  constructor(private http: HttpClient) {}
  apiURL = 'https://localhost:44362/api/ToDoTask/';
  getTodoList() {
    return this.http.get(this.apiURL + 'GetAll');
  }

  addTodoTask(taskName: string) {
    return this.http.post(this.apiURL + 'Add', { TaskName: taskName });
  }

  updateTodoAsComplete(id: number, todoComplete: boolean) {
    return this.http.put(this.apiURL + 'Update', {
      Id: id,
      IsComplete: todoComplete,
    });
  }

  deleteTodoTask(id: number) {
    return this.http.put(this.apiURL + 'Update', { Id: id, IsDeleted: true });
  }
}
