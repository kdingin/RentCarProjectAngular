import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails:CarDetail[]=[];
  currentCarDetail: CarDetail;
  dataLoaded = false;
  baseUrl="https://localhost:44358/uploads/images/";
  carId: number;

  constructor(private carService:CarService,private toastrService:ToastrService,private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }
    ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      /*else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }*/
      else if(params["carId"]){
        this.getCarDetailsId(params["carId"])
      }
      else{
        this.getAllCars();
      }
    })
  }
  getAllCars(){
    this.carDetailService.getCarDetail().subscribe(response=>{
     this.carDetails = response.data
     this.dataLoaded = true;
    })
   }

   getCarDetailsId(carId:number) {
    this.carService.getCarDetailsId(carId).subscribe(response=>{
      this.carDetails = response.data
      console.log(this.getCarDetailsId)
    })
  }

  getByBrandId(brandId:number){
    this.carService.getByBrandId(brandId).subscribe(response=>{
      this.carDetails=response.data
      console.log(this.carDetails);
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
  
  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
  setCurrentCarDetails(carDetail:CarDetail){
    this.currentCarDetail = carDetail;
  }
  getCurrentCarDetails(){

  }
}
/**/