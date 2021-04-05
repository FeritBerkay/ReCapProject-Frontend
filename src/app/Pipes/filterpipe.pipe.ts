import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../Models/Entities/Car';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

   //Degisime ugramasını istedigim data product[].  
   transform(value: Car[], filterText:string): Car[] {
    //Girilen deger kucuk harf yap. Urunlerin filitrele. Her bir urunun harflerini kucult. Herbir unurun harfi  filtext icinde varmı diye bakılıyor. Filtertext yoksa degeri direk dondur.
    filterText:filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Car)=>p.carName.toLowerCase().indexOf(filterText)!==-1):value;
  }

}
