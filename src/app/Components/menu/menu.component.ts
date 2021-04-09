import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/Entities/Brand';
import { Color } from 'src/app/Models/Entities/Color';
import { BrandService } from 'src/app/Services/BrandService/brand.service';
import { ColorService } from 'src/app/Services/ColorService/color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colors: Color[];
  brands: Brand[];
  filterText="";
  currentBrandId:number;
  currentColorId:number;
  constructor(private brandService: BrandService, private colorService: ColorService) { }

  ngOnInit(): void {

    this.getColors();
    this.getBrands();
    console.log(this.currentColorId)
  }
  getColors() {
    this.colorService.getAllColors()
      .subscribe(response => { this.colors = response.data });
  }
  getBrands() {
    this.brandService.getAllBrands()
    .subscribe(response => { this.brands = response.data });

  }
  setCurrentBrand(brandId:number){
    return(brandId===this.currentBrandId?true:false)
  }
  setCurrentColor(colorId:number){
    return(colorId===this.currentColorId?true:false)
  }

}
