using Bussiness.Concrete;
using DataAccess.Concrete.EntityFramework;
//using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    class ConsoleUI
    {
        static void Main(string[] args)
        {
            CarManager carManager = new CarManager(new EfCarDal());
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            CategoryManager categoryManager = new CategoryManager(new EfCategoryDal());
            ColorManager colorManager = new ColorManager(new EfColorDal());


            GetByBrandId(3, brandManager);
            GetByCarId(3,carManager);
            GetByCategoryId(1, categoryManager);
            GetByColorId(2, colorManager);




            GetAllCars(carManager);



            //#########################################_Brand Methods_#########################################
            static void AddBrand(Brand brand, BrandManager brandManager)
            {
                brandManager.Add(brand);
            }

            static void DeleteBrand(Brand brand, BrandManager brandManager)
            {
                brandManager.Delete(brand);
            }

            static void UpdateBrand(Brand brand, BrandManager brandManager)
            {
                brandManager.Update(brand);
            }

            static void GetAllBrand(BrandManager brandManager)
            {
                foreach (var brand in brandManager.GetAll().Data)
                {
                    Console.WriteLine(brand.BrandName);
                }
            }
            static void GetByBrandId(int brandId, BrandManager brandManager)
            {
                var getBrand = brandManager.GetById(brandId).Data;
                Console.WriteLine(getBrand.BrandName);
            }

            //#########################################_Category Methods_#########################################
            static void AddCategory(Category category, CategoryManager categoryManager)
            {
                categoryManager.Add(category);
            }

            static void DeleteCategory(Category category, CategoryManager categoryManager)
            {
                categoryManager.Delete(category);
            }

            static void UpdateCategory(Category category, CategoryManager categoryManager)
            {
                categoryManager.Update(category);
            }

            static void GetAllCategories(CategoryManager categoryManager)
            {
                foreach (var category in categoryManager.GetAll().Data)
                {
                    Console.WriteLine(category.CategoryName);
                }
            }
            static void GetByCategoryId(int categoryId, CategoryManager categoryManager)
            {
                var getCaregory = categoryManager.GetById(categoryId).Data;
                Console.WriteLine(getCaregory.CategoryName);
            }

            //########################################_Color Methods_#########################################
            static void AddColor(Color color, ColorManager colorManager)
            {
                colorManager.Add(color);
            }

            static void DeleteColor(Color color, ColorManager colorManager)
            {
                colorManager.Delete(color);
            }

            static void UpdateColor(Color color, ColorManager colorManager)
            {
                colorManager.Update(color);
            }

            static void GetAllColors(ColorManager colorManager)
            {
                foreach (var color in colorManager.GetAll().Data)
                {
                    Console.WriteLine(color.ColorName);
                }
            }

            static void GetByColorId(int colorId, ColorManager colorManager)
            {
                var getColor = colorManager.GetById(colorId).Data;
                Console.WriteLine(getColor.ColorName);
                
            }


            //#########################################_Car Methods_#########################################
            static void AddCar(Car car, CarManager carManager)
            {
                carManager.Add(car);
            }

            static void DeleteCar(Car car, CarManager carManager)
            {
                carManager.Delete(car);
            }

            static void UpdateCar(Car car, CarManager carManager)
            {
                carManager.Update(car);
            }

            static void GetAllCars(CarManager carManager)
            {
                foreach (var car in carManager.GetAll().Data)
                {
                    Console.WriteLine(car.Desciription);
                }
            }
            static void GetCarDetails(CarManager carManager) 
            {
                foreach (var car in carManager.GetCarDetails().Data)
                {
                    Console.WriteLine("CarName=" + car.CarName + " CategoryName=" + car.CategoryName + " BrandName=" + car.BrandName + " ColorName="
                        + car.ColorName + " DailyPrice=" + car.DailyPrice);
                }
            }            
            static void GetCarsByBrandId(CarManager carManager)
            {
                foreach (var car in carManager.GetAllByBrandId(1).Data)
                {
                    Console.WriteLine(car.Desciription);
                }
            }

            static void GetCarsByColorId(int carID,CarManager carManager)
            {
                foreach (var car in carManager.GetAllByColorId(carID).Data)
                {
                    Console.WriteLine(car.Desciription);
                }
            }

            static void GetByCarId(int carId, CarManager carManager)
            {
                var getCar = carManager.GetById(carId).Data;
                Console.WriteLine(getCar.CarName);
            }
        }
    }
}

