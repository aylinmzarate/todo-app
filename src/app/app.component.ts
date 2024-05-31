import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  currentFilter: string = 'all';

  addTask(task: Task) {
    this.tasks.push(task);
    this.applyFilter();
  }

  filterTasks(filter: string) {
    this.currentFilter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.currentFilter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.currentFilter === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
