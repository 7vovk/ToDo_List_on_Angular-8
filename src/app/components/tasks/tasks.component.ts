import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  version = VERSION.full;
  tasks = this.todoService.toDo;
  taskName: string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addNewTask() {
    if (this.taskName == null || this.taskName == '') {
      window.alert('Please enter some value before adding');
    } else {
      this.todoService.addNewTask(this.taskName);
      this.taskName = ''
    }
    
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
  }

  removeAllTasks() {
    this.todoService.removeAllTasks();
  }

}
