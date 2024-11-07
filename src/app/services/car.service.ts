import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../car-table/car-table.component';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httphandler: HttpClient) {}

  retriveCars() {
    return this.httphandler.get<Car>('http://localhost:8080/cars');
  }

  
}
