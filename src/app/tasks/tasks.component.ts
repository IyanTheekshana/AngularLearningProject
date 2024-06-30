import { Component, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, AddTaskComponent],
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  isAddTaskActivated: boolean = false;

  constructor(private seriveTsk: TasksService) {}

  get selectedTaskOnUserId() {
    return this.seriveTsk.getUserTasks(this.id());
  }

  onCloseModel() {
    this.isAddTaskActivated = false;
  }

  onAddTask() {
    this.isAddTaskActivated = true;
  }
}
