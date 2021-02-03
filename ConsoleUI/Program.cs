using Bussiness.Concrete;
using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            CarManager carManager = new CarManager(new InMemoryCarDal());
            Console.WriteLine("Descriptionu tesla model 3 olanı cagırdık");
            foreach (var car in carManager.Any("Tesla Model X"))
            {
                Console.WriteLine(car.Desciription);
            }
            Console.WriteLine("Yeni bir araba ekleyip brandıd sini cagırdık.");
            carManager.Add(new Entities.Concrete.Car { BrandId = 23542, CarId = 4, CategoryId = 3, ColorId = 1, DailyPrice = 2300, Desciription = "Doblo", ModelYear = 2002 });
            foreach (var car in carManager.GetAll())
            {
                if (car.BrandId == 23542)
                {
                    Console.WriteLine(car.BrandId);
                }
            }
            //Ekledigimiz arabayı sildik
            Car delete = new Car() { CarId = 4 };
            carManager.Delete(delete);

            Console.WriteLine("Id si 2 olan arabanın CarID sini cagırdık");
            foreach (var car in carManager.GetByID(2))
            {
                Console.WriteLine(car.CarId);
            }

            Console.WriteLine("Yeni bir kar nesnesi olusturup onu CarId sini esit olana Updateledik. Ve onun dcs ni cagırdık");
            Car car1 = new Car { CarId = 1, BrandId = 5, CategoryId = 2, ColorId = 1, DailyPrice = 2500, Desciription = "Audi a3", ModelYear = 2008, };
            carManager.Update(car1);

            //"Car Idsi 1 olan yeni ekledigimiz arabanın desciriptionsunu cagırdık."
            foreach (var car in carManager.GetAll())
            {
                if (car.CarId == 1)
                {
                    Console.WriteLine(car.Desciription);
                }
            }
            Console.WriteLine("Car Idsi 2 olan arabanın desciriptionunu cagırdık");
            foreach (var car in carManager.Find(2))
            {
                Console.WriteLine(car.Desciription);
            }
            Console.WriteLine("Desciriptionunun icerisinde Tesla kelimesi gecenlerin CarIdlerini azalan DailyPrice ye göre cagırdık");
            foreach (var car in carManager.FindAll("Tesla"))
            {
                Console.WriteLine(car.CarId);
            }
            carManager.Add(new Entities.Concrete.Car { CarId = 4, BrandId = 2, CategoryId = 4, ColorId = 3, DailyPrice = 20000, Desciription = "Mercedes Benze Tır", ModelYear = 2002 });
        }
    }
}
