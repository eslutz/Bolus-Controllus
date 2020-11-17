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
    public class HistoryController : ControllerBase
    {
        private IDAL dal;
        public HistoryController(IDAL dal)
        {
            this.dal = dal;
        }

        //get history
        [HttpGet("{userID}")]
        public IEnumerable<History> GetHistory(long userID)
        {
            return dal.GetHistory(userID);
        }

        //set 
        [HttpPost("add")]
        public long AddHistory(History newHistory)
        {
            return dal.AddHistory(newHistory);
        }

        //delete
        [HttpDelete("delete/{id}")]
        public void DeleteHistory(long id)
        {
            dal.DeleteHistory(id);
        }

        //get insulin history within time window
        [HttpGet("{userID}/{insulinDuration}")]
        public double GetActiveInsulin(long userID, long insulinDuration)
		{
            return dal.GetActiveInsulin(userID, insulinDuration);
        }
    }
}
