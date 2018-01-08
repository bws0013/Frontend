import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  location: string;

  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = 'john doe';
    this.age = 50;
    this.location = 'tuvalu';

    this.hobbies = ['fishing', 'golfing', 'coding'];
  }

}
