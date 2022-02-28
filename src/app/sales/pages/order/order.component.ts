import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  capitalLetter: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green,
    },
  ];

  constructor() {}

  changeLetter() {
    this.capitalLetter = !this.capitalLetter;
  }

  changeOrder(value: string): void {
    console.log(value)
    this.orderBy = value;
  }
}
