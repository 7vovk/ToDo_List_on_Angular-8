import { Injectable } from '@angular/core';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  toDo = TODOS;
  id = 1;

  constructor() { }

  addNewTask(value: any) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
    let id = this.id;
    this.id++;
    this.toDo.push({id, value});
    console.log(this.toDo);
  }

  removeTask(id: number) {
    this.toDo.splice(this.toDo.findIndex(item => item.id === id), 1)
  }
  
  removeAllTasks() {
    if(confirm("Are you sure that you want to delete all tasks")) {
      this.toDo.splice(0, this.toDo.length);
    }
  }
  
}
