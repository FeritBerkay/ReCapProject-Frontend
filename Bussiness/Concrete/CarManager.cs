using Bussiness.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public void Add(Car car)
        {
            _carDal.Add(car);
        }

        public List<Car> Any(string desciription)
        {
            return _carDal.Any(desciription);
        }

        public void Delete(Car car)
        {
            _carDal.Delete(car);
        }

        public List<Car> Find(int carId)
        {
            return _carDal.Find(carId);
        }

        public List<Car> FindAll(string word)
        {
            return _carDal.FindAll(word);
        }

        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<Car> GetByID(int categoryId)
        {
            return _carDal.GetById(categoryId);
        }

        public void Update(Car car)
        {
            _carDal.Update(car);
        }
    }
}
