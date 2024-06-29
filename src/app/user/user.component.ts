import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  user = input.required<User>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  selected = input.required<boolean>();
  select = output<string>();

  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}
