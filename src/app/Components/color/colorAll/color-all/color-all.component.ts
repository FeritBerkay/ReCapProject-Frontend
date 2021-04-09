import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/Models/Entities/Color';
import { ColorService } from 'src/app/Services/ColorService/color.service';

@Component({
  selector: 'app-color-all',
  templateUrl: './color-all.component.html',
  styleUrls: ['./color-all.component.css']
})
export class ColorALlComponent implements OnInit {

  colors : Color[] = [];
  constructor(private colorService : ColorService, private tostrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllColors();
  }
  //Colorlar listelendi
  getAllColors(){
    this.colorService.getAllColors().subscribe((response) =>{
      this.colors = response.data
    });
  }
  //Color silindi 
  deleteColor(color : Color){
    this.colorService.delete(color);
    this.tostrService.success(color.colorName ,"Deleted")
  }
}
