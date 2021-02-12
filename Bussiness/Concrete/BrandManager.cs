using Bussiness.Abstract;
using Bussiness.Constans.Messages;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness.Concrete
{
    public class BrandManager : IBrandService
    {
        IBrandDal _brandDal;
        public BrandManager(IBrandDal brandDal)
        {
            _brandDal = brandDal;
        }

        public IDataResult<Brand> GetById(int brandId)
        {
            return new SuccessDataResult<Brand> (_brandDal.Get(p => p.BrandId == brandId));
        }

        public IResult Add(Brand brand)
        {
            if (brand.BrandName.Length > 2 && brand.BrandId > 0)
            {
                _brandDal.Add(brand);
                return new SuccessResult(Messages.BrandAdded);
            }
            return new ErrorResult(Messages.BrandNameInvalid);
        }

        public IResult Delete(Brand brand)
        {
            
            _brandDal.Delete(brand);
            return new SuccessResult(Messages.BrandDeleted);
        }

        public IDataResult<List<Brand>> GetAll()
        {
            return new SuccessDataResult<List<Brand>>(_brandDal.GetAll(),Messages.BrandsListed);
        }

        public IResult Update(Brand brand)
        {
            _brandDal.Update(brand);
            return new SuccessResult(Messages.BrandUpdated);
        }
    }
}
