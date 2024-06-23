import { Component,EventEmitter,Output,computed,input, output } from '@angular/core';

//import { Input } from '@angular/core';

// (1 approch)
//import { DUMMY_USERS } from '../dummy-users';
//import { Component, signal, computed } from '@angular/core';
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

//TRADITIONAL WAY: INPUT
//@Input({required:true}) id!: string;
//@Input({required:true}) avatar!: string;
//@Input({required:true}) name!: string;

//get imagePath(){
//return 'assets/users/'+ this.avatar;
//}

//TRADITIONAL WAY: OUTPUT
//@Output() select = new EventEmitter<string>();
 
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

 // (1 approch)
 //selectedUser = signal(DUMMY_USERS[randomIndex]);
 //imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar );

 //get imagePath(){
  //return 'assets/users/'+ this.selectedUser.avatar;
 //}

 //onSelectedUser() {
 // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
 //this.selectedUser.set(DUMMY_USERS[randomIndex])
 //this.selectedUser = DUMMY_USERS[randomIndex];
 //}

}
