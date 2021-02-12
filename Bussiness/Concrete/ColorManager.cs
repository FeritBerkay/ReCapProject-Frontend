using Bussiness.Abstract;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness.Concrete
{
    public class ColorManager : IColorService
    {
        IColorDal _colorDal;

        public ColorManager(IColorDal colorDal)
        {
            _colorDal = colorDal;
        }


        public IResult Add(Color color)
        {
            if (color.ColorName.Length>2 && color.ColorId>0)
            {
                _colorDal.Add(color);
                return new SuccessResult();
            }
            return new ErrorResult();
        }

        public IResult Delete(Color color)
        {
            _colorDal.Delete(color);
            return new SuccessResult();
        }
        public IDataResult<Color> GetById(int colorId)
        {
            return new SuccessDataResult<Color>(_colorDal.Get(c => c.ColorId == colorId));
        }
        public IDataResult<List<Color>> GetAll()
        {
            return new SuccessDataResult<List<Color>>(_colorDal.GetAll());
        }

        public IResult Update(Color color)
        {
            _colorDal.Update(color);
            return new SuccessResult();
        }
    }
}
