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
            UserManager userManager = new UserManager(new EfUserDal());
            CustomerManager customerManager = new CustomerManager(new EfCustomerDal());
            RentalManager rentalManager = new RentalManager(new EfRentalDal());


            DateTime? bos = null;

            
            User user = new User { Id = 1, FirstName = "John", LastName = "Smith",Email="John_Smith@gmail.com",Password="12345" };
            Customer customer = new Customer {CustomerId=1, CompanyName = "FBKITAS", UserId = 2 };

            AddCustomer(customer, customerManager);

            //GetByBrandId(3, brandManager);
            //GetByCarId(3,carManager);
            //GetByCategoryId(1, categoryManager);
            //GetByColorId(2, colorManager);




            //GetAllCars(carManager);


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


            //#########################################_User Methods_#########################################
            static void AddUser(User user,UserManager userManager)
            {
                userManager.Add(user);
                Console.WriteLine(user.FirstName+ " Added");
            }

            static void DeleteUser(User user, UserManager userManager)
            {
                userManager.Delete(user);
                Console.WriteLine(user.FirstName + " Deleted");
            }

            static void UpdateUser(User user, UserManager userManager)
            {
                userManager.Update(user);
                Console.WriteLine(user.FirstName + " Updated");
            }

            static void GetAllUser(UserManager userManager)
            {
                foreach (var user in userManager.GetAll().Data)
                {
                    Console.WriteLine(user.FirstName);
                }
            }

            static void GetByUserId(int id, UserManager userManager)
            {
                var getUser = userManager.GetById(id).Data;
                Console.WriteLine(getUser.FirstName);
            }

            //#########################################_Customer Methods_#########################################
            static void AddCustomer(Customer customer, CustomerManager customerManager)
            {
                customerManager.Add(customer);
                Console.WriteLine(customer.CompanyName + " Added");
            }

            static void DeleteCustomer(Customer customer, CustomerManager customerManager)
            {
                customerManager.Delete(customer);
                Console.WriteLine(customer.CompanyName);
            }

            static void UpdateCustomer(Customer customer, CustomerManager customerManager)
            {
                customerManager.Update(customer);
                Console.WriteLine(customer.CompanyName);
            }

            static void GetAllCustomers(CustomerManager customerManager)
            {
                foreach (var customer in customerManager.GetAll().Data)
                {
                    Console.WriteLine(customer.CompanyName);
                }
            }

            static void GetByCustomerId(int id, CustomerManager customerManager)
            {
                var getCustomer = customerManager.GetById(id).Data;
                Console.WriteLine(getCustomer.CompanyName);
            }


            //#########################################_Reantal Methods_#########################################
            static void AddRental(Rental rental, RentalManager rentalManager)
            {
                if (rental.ReturnDate!=null)
                {
                    rentalManager.Add(rental);
                    Console.WriteLine(rental.Id + " Added");
                }
                Console.WriteLine(rental.ReturnDate + " Is null " + rental.Id + " Don't added");
            }

            static void DeleteRental(Rental rental, RentalManager rentalManager)
            {
                rentalManager.Delete(rental);
                Console.WriteLine(rental.Id);
            }

            static void UpdateRental(Rental rental, RentalManager rentalManager)
            {
                rentalManager.Update(rental);
                Console.WriteLine(rental.Id);
            }

            static void GetAllRentals(RentalManager rentalManager)
            {
                foreach (var customer in rentalManager.GetAll().Data)
                {
                    Console.WriteLine(customer.Id);
                }
            }

            static void GetByRentalId(int id, RentalManager rentalManager)
            {
                var getCustomer = rentalManager.GetById(id).Data;
                Console.WriteLine(getCustomer.Id);
            }
        }
    }
}

