
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface ICarDal
    {
        List<Car> GetAll();
        List<Car> GetById(int categoryId);
        List<Car> Any(string desciription);
        List<Car> Find(int carId);
        List<Car> FindAll(string word);
        void Add(Car car);
        void Update(Car car);
        void Delete(Car car);

    }
}
