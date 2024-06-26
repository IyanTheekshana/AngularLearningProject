import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();

  tasks: Task[] = dummyTasks;

  get selectedTaskOnUserId() {
    return this.tasks.filter((task) => task.userId == this.id());
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
