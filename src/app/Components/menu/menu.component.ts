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
  constructor(private brandService: BrandService, private colorService: ColorService) { }

  ngOnInit(): void {

    this.getColors();
    this.getBrands();
  }
  getColors() {
    this.colorService.getColors()
      .subscribe(response => { this.colors = response.data });
  }
  getBrands() {
    this.brandService.getBrands()
    .subscribe(response => { this.brands = response.data });

  }

}
