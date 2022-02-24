import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'carmelo';
  nameUpper: string = 'CARMELO';
  completeName: string = 'cArmelo bUelvas';

  date: Date = new Date();

  constructor() { }

}
