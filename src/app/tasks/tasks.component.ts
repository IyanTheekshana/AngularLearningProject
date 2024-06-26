import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-tasks';

export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  name = input<string>();

  tasks: Task[] = dummyTasks;
}
