import { Component, output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = "";

  get SelectedUser(){
   return this.users.find(u => u.id === this.selectedUserId);
  }

  onSelectedUser(id: string) {
    return this.users.find(u => u.id == id)!;
  }

}
