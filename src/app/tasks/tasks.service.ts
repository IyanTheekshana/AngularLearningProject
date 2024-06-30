import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasksStorage');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  addTask(task: Task) {
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasks));
  }
}
