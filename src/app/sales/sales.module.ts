import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { NumberComponent } from './pages/number/number.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { CapitalLettersPipe } from './pipes/capital-letters.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    NumberComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CapitalLettersPipe,
    FlyPipe,
    SortPipe,
  ],
  imports: [CommonModule, PrimeNGModule],
  exports: [
    NumberComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
