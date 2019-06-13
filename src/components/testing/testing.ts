import { Component } from '@angular/core';

/**
 * Generated class for the TestingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'testing',
  templateUrl: 'testing.html'
})
export class TestingComponent {

  text: string;

  constructor() {
    console.log('Hello TestingComponent Component');
    this.text = 'Hello World';
  }

}
