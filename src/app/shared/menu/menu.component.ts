import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes of Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Text and Dates', icon: 'pi pi-aling-left', routerLink: '*' },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'Not Commons', icon: 'pi pi-globe', routerLink: 'not-commons' },
        ],
      },
      {
        label: 'Customs Pipes',
        icon: 'pi pi-cog',
        routerLink: 'order'
      }
    ];
  }
}
