import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails:CarDetail[]=[];
  dataLoaded = false;

  constructor(private carService:CarService,private cardetailService:CarDetailService,) { }
  ngOnInit(): void {
    this.getCars();
    this.getCarDetail();
  }
  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarDetail(){
    this.cardetailService.getCarDetail().subscribe(response=>{
      this.carDetails=response.data
      console.log(this.carDetails);
    })
    
  }
}
