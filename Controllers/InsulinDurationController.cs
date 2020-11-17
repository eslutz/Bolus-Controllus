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
    public class InsulinDurationController : ControllerBase
    {
        private IDAL dal;
        public InsulinDurationController(IDAL dal)
        {
            this.dal = dal;
        }

        //get insulin duration
        [HttpGet("{userID}")]
        public InsulinDuration GetInsulinDuration(long userID)
        {
            return dal.GetInsulinDuration(userID);
        }

        //set 
        [HttpPost("add")]
        public long AddInsulinDuration(InsulinDuration newInsulinDuration)
        {
            return dal.AddInsulinDuration(newInsulinDuration);
        }

        //update
        [HttpPut("update")]
        public bool UpdateInsulinDuration(InsulinDuration newInsulinDuration)
        {
            return dal.UpdateInsulinDuration(newInsulinDuration);
        }       
    }
}
