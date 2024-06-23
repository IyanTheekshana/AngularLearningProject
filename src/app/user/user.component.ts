import { Component, computed,input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
//USING SIGNALS: INPUT
id = input.required<string>();
avatar = input.required<string>();
name = input.required<string>();

imagePath = computed(()=>'assets/users/'+ this.avatar() );

//USING SIGNALS: OUTPUT
select = output<string>();

onSelectedUser() {
  this.select.emit(this.id());
}

}
