using Bussiness.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Bussiness.Concrete
{
    public class BrandManager : IBrandService
    {
        IBrandDal _branddal;
        public BrandManager(IBrandDal brandDal)
        {
            _branddal = brandDal;
        }

        public List<Brand> GetById1(int id)
        {
            return _branddal.GetAll(p=> p.BrandId==id);
        }

        // Brand GetById(int id)
        //{
        //    return _branddal.GetCarsByBrandId(p=>p.BrandId==id);
        //}

        List<Brand> GetById(int id)
        {
            return _branddal.GetAll(p => p.BrandId == id);
        }
    }
}
