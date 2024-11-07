import { Routes } from '@angular/router';
import { CardFancyExample } from './card-fancy-example/card-fancy-example.component';
import { CarTableComponent } from './car-table/car-table.component';

export const routes: Routes = [
  { path: 'card', component: CardFancyExample },
  { path: 'table', component: CarTableComponent },
];
