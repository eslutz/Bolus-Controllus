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
    public class CorrectionRatioController : ControllerBase
    {
        private IDAL dal;
        public CorrectionRatioController(IDAL dal)
        {
            this.dal = dal;
        }

        //get correction ratio
        [HttpGet("{userID}")]
        public IEnumerable<CorrectionRatio> GetCorrectionRatio(long userID)
        {
            return dal.GetCorrectionRatio(userID);
        }

        //set 
        [HttpPost("add")]
        public long AddCorrectionRatio(CorrectionRatio newCorrectionRatio)
        {
            return dal.AddCorrectionRatio(newCorrectionRatio);
        }

        //update
        [HttpPut("update")]
        public bool UpdateCorrectionRatio(CorrectionRatio newCorrectionRatio)
        {
            return dal.UpdateCorrectionRatio(newCorrectionRatio);
        }

        //delete
        [HttpDelete("delete/{id}")]
        public void DeleteCorrectionRatio(long id)
        {
            dal.DeleteCorrectionRatio(id);
        }
    }
}
