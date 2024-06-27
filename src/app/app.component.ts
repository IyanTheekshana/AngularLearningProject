import { Component, computed, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, AddTaskComponent],
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId: string = '';

  get SelectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
