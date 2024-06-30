import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  userId = input.required<string>();
  close = output();

  private serviceTsk = inject(TasksService);

  enteredTitle = signal<string>('');
  enteredSummmery = signal<string>('');
  enteredDate = signal<string>('');

  onCloseAddTAsk() {
    this.close.emit();
  }

  onSubmit() {
    let newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: this.enteredTitle(),
      summary: this.enteredSummmery(),
      dueDate: this.enteredDate(),
    };
    this.serviceTsk.addTask(newTask);
    this.close.emit();
  }
}
