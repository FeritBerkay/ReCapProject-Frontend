import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../Models/Entities/Brand';

@Pipe({
  name: 'brandfilter'
})
export class BrandfilterPipe implements PipeTransform {

  //Degisime ugramasını istedigim data product[].  
  transform(value: Brand[], filterText:string): Brand[] {
    //Girilen deger kucuk harf yap. Urunlerin filitrele. Her bir urunun harflerini kucult. Herbir unurun harfi  filtext icinde varmı diye bakılıyor. Filtertext yoksa degeri direk dondur.
    filterText:filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Brand)=>p.brandName.toLowerCase().indexOf(filterText)!==-1):value;
  }

}
