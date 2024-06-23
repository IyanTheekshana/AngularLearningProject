import { Component, Input, computed,input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
@Input({required:true}) user!:{id: string, avatar: string, name: string};

imagePath = computed(()=>'assets/users/'+ this.user.avatar);

//USING SIGNALS: OUTPUT
select = output<string>();

onSelectedUser() {
  this.select.emit(this.user.id);
}

}
