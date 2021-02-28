using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfBrandDal : IBrandDal
    {
        public void Add(Brand entity)
        {
            using (RentCarContext context= new RentCarContext())
            {
                var addedEntitiy = context.Entry(entity);
                addedEntitiy.State = EntityState.Added;
                context.SaveChanges();
            }
        }

        public Brand Any(Expression<Func<Brand, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public void Delete(Brand entity)
        {
            using (RentCarContext context= new RentCarContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Deleted;
                context.SaveChanges();
            }
        }

        public Brand Find(Expression<Func<Brand, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Brand FindAll(Expression<Func<Brand, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<Brand> GetAll(Expression<Func<Brand, bool>> filter = null)
        {
            using (RentCarContext context=new RentCarContext())
            {
                  return filter == null ?
                    context.Set<Brand>().ToList() :
                    context.Set<Brand>().Where(filter).ToList();
            }

        }

        public Brand GetCarsByBrandId(Expression<Func<Brand, bool>> filter)
        {
            using (RentCarContext context= new RentCarContext())
            {
                return context.Set<Brand>().SingleOrDefault(filter);
            }
            
        }

        public void Update(Brand entity)
        {
            using (RentCarContext context=new RentCarContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Modified;
                context.SaveChanges();

            }
        }
    }
}
