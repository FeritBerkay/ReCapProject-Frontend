import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/Services/ColorService/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private colorService:ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.creatColorAddForm();
  }
  creatColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
      colorId: ['', Validators.required],
    })
  }

  add(){
    if(this.colorAddForm.valid){
      let productModel = Object.assign({},this.colorAddForm.value)
      this.colorService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
    }
  }
}
