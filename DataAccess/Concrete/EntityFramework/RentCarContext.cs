using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Text;
using Entities.Concrete;

namespace DataAccess.Concrete.EntityFramework
{
    public class RentCarContext : DbContext
    {
        //Hangi data ile kullanacagını gosterdigin yer.
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=RentCar;Trusted_Connection=true");
            //optionsBuilder.UseSqlServer(@"Server=(localdb)\projectsV13;Database=Northwind;Trusted_Connection=true");
        }
        //Neyin neye karsılık gelecegini yazdık.
        public DbSet<Car> Cars { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
