import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  close = output();

  enteredTitle = signal<string>('');
  enteredSummmery = signal<string>('');
  enteredDate = signal<string>('');

  onCloseAddTAsk() {
    this.close.emit();
  }
}
