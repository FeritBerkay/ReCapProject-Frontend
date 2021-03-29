import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/Models/Entities/Color';
import { ColorResponseModule } from 'src/app/Models/Responses/ColorResponseModule';
import { ColorService } from 'src/app/Services/ColorService/color.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  constructor(private colorService:ColorService ) { }

  ngOnInit(): void {
    this.getColor();
  }
getColor(){
  this.colorService.getColors()
  .subscribe(
    response=>{
      this.colors=response.data
     }
  )
  }
}

