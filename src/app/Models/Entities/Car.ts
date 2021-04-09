export interface Car{
    carId: number;
    carName:string;
    brandName: string;
    colorName: string;
    categoryName: string;
    modelYear: number;
    brandId:number;
    dailyPrice: number;
    colorId:number;
    status?:boolean;
    description: string;
    images: string[];
}