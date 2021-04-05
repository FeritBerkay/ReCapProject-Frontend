import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../Models/Entities/Color';

@Pipe({
  name: 'colorfilter'
})
export class ColorfilterPipe implements PipeTransform {

    //Degisime ugramasını istedigim data product[].  
    transform(value: Color[], filterText:string): Color[] {
      //Girilen deger kucuk harf yap. Urunlerin filitrele. Her bir urunun harflerini kucult. Herbir unurun harfi  filtext icinde varmı diye bakılıyor. Filtertext yoksa degeri direk dondur.
      filterText:filterText? filterText.toLocaleLowerCase():""
      return filterText?value.filter((p:Color)=>p.colorName.toLowerCase().indexOf(filterText)!==-1):value;
    }

}
