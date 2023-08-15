import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[]=[];
  dataLoaded = false;
  apiUrl = 'https://localhost:7216/api/cars/getall';
  constructor(
    private carService: CarService,
  ) {}
  ngOnInit(): void {
    console.log('ınit çalıştı');
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
