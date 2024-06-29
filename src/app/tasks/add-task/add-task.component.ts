import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

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
  add = output<Task>();

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
    this.add.emit(newTask);
  }
}
