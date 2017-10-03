using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NumberGuessing.Controllers
{

    public class HomeController : Controller
    {

        private static int GenerateRand()
        {
                Random r = new Random();
                int rand = r.Next(1, 101);  //generate from 1-100, inclusive
                return rand;
        }
        

        public ActionResult Index()
        {
            Session["rand"] = GenerateRand();
            return View();
        }
        
        [HttpPost]
        public JsonResult Check(int toCheck)
        {
            int result = toCheck - (int)Session["rand"];

            return Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}