import { Component } from '@angular/core';

import { Product } from "./product.model";

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

  names: string[] = ['alfredo', 'german', 'luis'];
  newName: string = '';
  products: Product[] = [
    {
      name: 'photo 1',
      price: 100,
      image: 'https://images.unsplash.com/photo-1651226550740-b30efba028f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjQ4NDAwNA&ixlib=rb-1.2.1&q=80&w=1080',
      category: 'all',
    },
    {
      name: 'photo 2',
      price: 200,
      image: 'https://images.unsplash.com/photo-1641435354609-5240e4adb4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjQ4NDA0MA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'photo 3',
      price: 300,
      image: 'https://images.unsplash.com/photo-1651384263074-63e14a45d91d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjQ4NDA4NQ&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'photo 4',
      price: 400,
      image: 'https://images.unsplash.com/photo-1650915850274-f5014ce6e6b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjQ4NDEwOA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'photo 5',
      price: 500,
      image: 'https://images.unsplash.com/photo-1649874888490-23f7c0390a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjQ4NDEyMw&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ]

  toggleButton() {
    this.isBtnDisabled = !this.isBtnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
