import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/Entities/Brand';
import { BrandService } from 'src/app/Services/BrandService/brand.service';

@Component({
  selector: 'app-brand-all',
  templateUrl: './brand-all.component.html',
  styleUrls: ['./brand-all.component.css']
})
export class BrandAllComponent implements OnInit {

  brands : Brand[] = [];
  constructor(private brandService : BrandService, private tostrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }
  //Brandlar listelendi
  getAllBrands(){
    this.brandService.getAllBrands().subscribe((response) =>{
      this.brands = response.data
    });
  }
  //Brand silindi 
  deleteBrand(brand : Brand){
    this.brandService.delete(brand);
    this.tostrService.success(brand.brandName ,"Deleted")
  }
}
