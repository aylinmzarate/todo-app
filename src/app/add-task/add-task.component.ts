import { Component, EventEmitter, Output } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  addTask() {
    const newTask: Task = { name: this.taskName, completed: false };
    this.taskAdded.emit(newTask);
    this.taskName = '';
  }
}
