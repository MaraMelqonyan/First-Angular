import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: "Mara",
    surname: "Melqonyan",
    email: "melqonyan.mara@gmail.com"
  }

  changeUser () {
    this.user.name = "John";
    this.user.surname = "Lennon";
    this.user.email = "Jonh.lennon@mail.ru";
  }
}


