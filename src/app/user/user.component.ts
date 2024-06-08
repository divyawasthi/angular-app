import { Component,Input,Output,EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randind = Math.floor(Math.random() * DUMMY_USERS.length);


type User ={
  id: string,
  avatar: string,
  name : string 
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
