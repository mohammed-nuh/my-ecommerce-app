import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './users.service';


@Component({
  selector: 'users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  usersList: User[];

  constructor(private userService: UserService){
    this.usersList = [];
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((response: User[]) => {
        this.usersList = response;
  });
  }
}