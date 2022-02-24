import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  name: string = 'Carmelo';
  gendre: string = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  clients: string[] = [
    'Maria',
    'Juan',
    'Pedro',
    'Felipe',
    'Santiago',
    'Javier',
  ];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  person = {
    name: 'Carmelo',
    age: 39,
    address: 'Medellin, Colombia',
  };

  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false,
    },
  ];

  myObservable = interval(5000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });

  constructor() {}

  changeClient(): void {
    this.name = 'Maria';
    this.gendre = 'female';
  }

  deleteClient(): void {
    this.clients.pop();
  }
}
