using Bussiness.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Entities.DTOs;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using Bussiness.Constans.Messages;

namespace Bussiness.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public IResult Add(Car car)
        {
            if (car.Desciription.Length>2&& car.DailyPrice>0)
            {
                _carDal.Add(car);
                return new SuccessResult(Messages.CarAdded);
            }
            else
            {
                return new  ErrorResult(Messages.CarNameInvalid);
            }
        }

        //public List<Car> Any(string desciription)
        //{
        //    //return _carDal.Any(desciription);
        //}

        //public List<Car> Find(int carId)
        //{
        //    //return _carDal.Find(carId);
        //}

        //public List<Car> FindAll(string word)
        //{
        //    //return _carDal.FindAll(word);
        //}

        public IDataResult<List<Car>> GetAll()
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(), Messages.CarsListed);
        }


        public IDataResult<List<Car>> GetAllByBrandId(int id)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(c => c.BrandId == id), Messages.CarsListed);
        }
        public IDataResult<List<Car>> GetAllByColorId(int id)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(p => p.BrandId == id), Messages.CarsListed);
        }

        public IDataResult<List<CarDetailDto>> GetCarDetails()
        {
             
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails(),Messages.CarsListed);
        }

        //public List<Car> GetByID(int categoryId)
        //{
        //    return _carDal.GetById();
        //}
        public IResult Delete(Car car)
        {
            _carDal.Delete(car);
            return new SuccessResult(Messages.CarDeleted);
        }
           
        public IResult Update(Car car)
        {
            _carDal.Update(car);
            return new SuccessResult(Messages.CarUpdated);
        }

        public IDataResult<Car> GetById(int carId)
        {
              
            return new SuccessDataResult<Car>(_carDal.Get(p => p.CarId == carId));
        }
    }
}
