import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-counter';
  counter: number = 0;

  Increment() {
    this.counter++;
  }

  Decrement() {
    this.counter--;
  }
  
  Reset() {
    this.counter = 0;
  }

  TimesTwo() {
    this.counter = this.counter * 2;
  }

  DividesTwo() {
    this.counter = this.counter / 2;
  }
}
