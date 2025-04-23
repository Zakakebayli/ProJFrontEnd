import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pageTitle: string = 'Welcome to the Home Page';
  userInput: string = 'Default text';

  constructor() {}

  updateUserInput(value: string) {
    this.userInput = value;
  }
}
