using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BolusControllus.Models;
using BolusControllus.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BolusControllus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarbRatioController : ControllerBase
    {
        private IDAL dal;
        public CarbRatioController(IDAL dal)
        {
            this.dal = dal;
        }

        //get carb ratio
        [HttpGet("{userID}")]
        public IEnumerable<CarbRatio> GetCarbRatio(long userID)
        {
            return dal.GetCarbRatio(userID);
        }

        //set 
        [HttpPost("add")]
        public long AddCarbRatio(CarbRatio newCarbRatio)
        {
            return dal.AddCarbRatio(newCarbRatio);
        }

        //update
        [HttpPut("update")]
        public bool UpdateCarbRatio(CarbRatio newCarbRatio)
        {
            return dal.UpdateCarbRatio(newCarbRatio);
        }

        //delete
        [HttpDelete("delete/{id}")]
        public void DeleteCarbRatio(long id)
        {
            dal.DeleteCarbRatio(id);
        }
    }
}
