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
    public class CategoryManager : ICategoryService
    {
        ICategoryDal _categoryDal;

        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }

        public IDataResult<List<Category>> GetAll()
        {
            return new SuccessDataResult<List<Category>> (_categoryDal.GetAll(), Messages.CategoriesListed);
        }

        public IDataResult<Category> GetById(int categoryId)
        {
            return new SuccessDataResult<Category>(_categoryDal.Get(p => p.CategoryId == categoryId));
        }

        public IResult Delete(Category category)
        {
            _categoryDal.Delete(category);
            return new SuccessResult(Messages.CategoryDeleted);   
        }

        public IResult Add(Category category)
        {
            if (category.CategoryName.Length>2 && category.CategoryId>0)
            {
                _categoryDal.Add(category);
                return new SuccessResult(Messages.CategoryAdded);
            }
            return new ErrorResult(Messages.CategoryNameInvalid);
        }

        public IResult Update(Category category)
        {
            _categoryDal.Update(category);
            return new SuccessResult(Messages.CategoryUpdated);
        }

        IDataResult<List<Category>> ICategoryService.GetAll()
        {
            return new SuccessDataResult<List<Category>>(_categoryDal.GetAll(), Messages.CategoriesListed);
        }
    }
}
