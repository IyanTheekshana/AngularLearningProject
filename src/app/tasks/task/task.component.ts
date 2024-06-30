import { Component, inject, input } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  task = input.required<Task>();
  private serviceTsk = inject(TasksService);

  onComplete() {
    this.serviceTsk.onCompleteTask(this.task().id);
  }
}
