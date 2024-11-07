import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CarService } from '../services/car.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Car {
  id: number;
  brand: string;
  model: string;
  color: string;
  year: string;
}

const ELEMENT_DATA: Car[] = [
  {
    id: 2,
    brand: 'Chevrolet',
    model: 'Malibu',
    color: 'White',
    year: '2018-01-01T00:00:00.000+00:00',
  },
  {
    id: 3,
    brand: 'Toyota',
    model: 'Corolla',
    color: 'Blue',
    year: '2020-01-01T00:00:00.000+00:00',
  },
  {
    id: 4,
    brand: 'Honda',
    model: 'Civic',
    color: 'Red',
    year: '2019-01-01T00:00:00.000+00:00',
  },
  {
    id: 5,
    brand: 'Ford',
    model: 'Mustang',
    color: 'Black',
    year: '2021-01-01T00:00:00.000+00:00',
  },
];

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [MatTableModule,HttpClientModule],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css',
  providers: [CarService] 
})
export class CarTableComponent implements OnInit {
  constructor(private carservice: CarService) {}
  ngOnInit(): void {
    this.refreshCars();
  }
  displayedColumns: string[] = ['id', 'brand', 'model', 'color', 'year'];
  dataSource: any = [];
  clickedRows = new Set<Car>();

  refreshCars() {
    this.carservice.retriveCars().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => {
        console.error('Error retrieving todos', error);
      }
    );
  }
}
