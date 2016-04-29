using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCAngularJS.Login.Models;
namespace MVCAngularJS.Login.Controllers
{
    public class DataController : Controller
    {
      
        public JsonResult UserLogin(LoginData model)
        {
            using (DataEntities db = new DataEntities())
            {
                var user = db.Users.Where(m => m.UserName == model.UserName && m.Password == model.Password).FirstOrDefault();

                return new JsonResult {  Data=user,JsonRequestBehavior=JsonRequestBehavior.AllowGet };
            }
        }

    }
}