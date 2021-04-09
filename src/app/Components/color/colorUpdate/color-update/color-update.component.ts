import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/Models/Entities/Color';
import { ColorService } from 'src/app/Services/ColorService/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  color : Color;
  colorUpdateForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private ColorService : ColorService,
    private toastrService : ToastrService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createColorUpdateForm()
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getColorById(params["colorId"])
      }
    })
  }
  //update form sadece colorName li cunkku update yaparken colorId ye gore update yapılıyor.
  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorName : ["",Validators.required]
    })
  }
  //Hangi colorın update edileceginiz bulmak icin var.
  getColorById(colorId:number){
    this.ColorService.getById(colorId).subscribe(response =>{
      this.color = response.data;
    })
  }
  updateColor(){
    if(this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value)
      colorModel.colorId = this.color.colorId
      this.ColorService.update(colorModel).subscribe(response =>{
        this.toastrService.success(response.message)
      },responseError => {
        this.toastrService.error(responseError.message)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }
  }
}
