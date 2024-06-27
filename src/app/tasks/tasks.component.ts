import { Component, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task.model';
import { AddTaskComponent } from './add-task/add-task.component';

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
  tasks: Task[] = dummyTasks;

  get selectedTaskOnUserId() {
    return this.tasks.filter((task) => task.userId == this.id());
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onCloseModel() {
    this.isAddTaskActivated = false;
  }

  onAddTask() {
    this.isAddTaskActivated = true;
  }
}
