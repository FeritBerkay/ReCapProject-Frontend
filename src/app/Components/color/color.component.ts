import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/Models/Entities/Color';
import { ColorService } from 'src/app/Services/ColorService/color.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  filterText="";
  constructor(private colorService:ColorService ) { }

  ngOnInit(): void {
    this.getColor();
  }
getColor(){
  this.colorService.getAllColors()
  .subscribe(
    response=>{
      this.colors=response.data
     }
  )
  
}
setCurrentColor(color:Color){
  this.currentColor=color
}
getCurrentColorClass(color:Color){
  if(color==this.currentColor){
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}
getAllColorClass(){
  if(!this.currentColor){
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}
}

