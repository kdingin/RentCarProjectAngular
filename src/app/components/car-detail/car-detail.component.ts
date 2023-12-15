import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[]=[];
  
  constructor(
    private carDetailService:CarDetailService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private rentalSerivce:RentalService
  ){
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
        this.getCarDetail()
      
    })
  }
  getCarDetail(){
    this.carDetailService.getCarDetail().subscribe(response=>{
      this.carDetails=response.data
    })
  }

 
}
