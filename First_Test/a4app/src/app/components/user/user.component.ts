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

  myForm: Form;

  constructor() { }

  ngOnInit() {
    this.name = 'john doe';
    this.age = 50;
    this.location = 'tuvalu';

    this.hobbies = ['fishing', 'golfing', 'coding'];
    this.myForm.thing = 'hello';
  }

  onClick() {
    // this.name = 'is this the real life';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Form {
  thing: string;
}
