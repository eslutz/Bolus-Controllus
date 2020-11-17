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
    public class BolusControllusController : ControllerBase
    {
        private IDAL dal;
        public BolusControllusController(IDAL dal)
        {
            this.dal = dal;
        }

        //get or create new user
        [HttpGet("{username}")]
        public User GetUser(string username)
        {
            return dal.GetUser(username);
        }

        [HttpGet("fulluser/{userID}")]
        public FullUser GetAllUserSettings(long userID)
		{
			return dal.GetAllUserSettings(userID);
		}
    }
}
