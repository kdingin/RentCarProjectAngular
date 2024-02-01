import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor: Color | null = null;
  constructor(private colorService:ColorService) { }
  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
  setCurrentColor(color:Color){
    this.currentColor=color
  }
  getCurrentColorClass(color: Color) {
    return {
      'list-group-item': true,
      'active': color === this.currentColor
    };
  }
  getAllColorClass() {
    return {
      'list-group-item': true,
      'active': !this.currentColor
    };
  }
  clearCurrentColor() {
    this.currentColor = null; 
  }
}
