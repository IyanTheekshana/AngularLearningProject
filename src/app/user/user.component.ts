import { Component, Input, computed, output } from '@angular/core';

export type User = {id: string, avatar: string, name: string};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
@Input({required:true}) user!: User;

imagePath = computed(()=>'assets/users/'+ this.user.avatar);

select = output<string>();

onSelectedUser() {
  this.select.emit(this.user.id);
}

}
