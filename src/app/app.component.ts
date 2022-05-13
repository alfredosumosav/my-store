import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBtnDisabled = true;

  person = {
    name: 'Alfredo',
    age: 18,
    img: "https://source.unsplash.com/random/"
  }

  toggleButton() {
    this.isBtnDisabled = !this.isBtnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
}
