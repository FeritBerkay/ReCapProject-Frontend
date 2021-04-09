import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/Entities/Brand';
import { BrandService } from 'src/app/Services/BrandService/brand.service';
import { CarService } from 'src/app/Services/CarService/car.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brand : Brand;
  brandUpdateForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private brandService : BrandService,
    private toastrService : ToastrService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createBrandUpdateForm()
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"])
      }
    })
  }
  //update form sade brandName li cunkku update yaparken brandId ye gore update yapılıyor.
  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandName : ["",Validators.required]
    })
  }
  //Hangi brandın update edileceginiz bulmak icin var.
  getBrandById(brandId:number){
    this.brandService.getById(brandId).subscribe(response =>{
      this.brand = response.data;
    })
  }
  updateBrand(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      brandModel.brandId = this.brand.brandId
      this.brandService.update(brandModel).subscribe(response =>{
        this.toastrService.success(response.message)
      },responseError => {
        this.toastrService.error(responseError.message)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }
  }
}
