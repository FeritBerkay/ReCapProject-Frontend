using Core.Utilities.Results.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness.Abstract
{
    public interface ICarService
    {
        IDataResult<List<Car>> GetAll();
        IDataResult<List<CarDetailDto>> GetCarDetails();
        IResult Add(Car car);
        IDataResult<Car> GetById(int carId);
        IResult Update(Car car);
        IResult Delete(Car car);
    }
}
