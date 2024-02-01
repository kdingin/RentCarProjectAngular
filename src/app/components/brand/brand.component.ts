import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand: Brand | null = null;
  constructor(private brandService:BrandService){}
  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand: Brand) {
    return {
      'list-group-item': true,
      'active': brand === this.currentBrand
    };
  }
  getAllBrandClass() {
    return {
      'list-group-item': true,
      'active': !this.currentBrand
    };
  }
  clearCurrentBrand() {
    this.currentBrand = null; 
  }
  
}
