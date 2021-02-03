using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness.Abstract
{
    public interface ICarService
    {
        List<Car> GetAll();
        List<Car> GetByID(int categoryId);
        List<Car> Find(int carId);
        List<Car> FindAll(string word);
        List<Car> Any(string desciription);
        void Add(Car car);
        void Update(Car car);
        void Delete(Car car);
    }
}
