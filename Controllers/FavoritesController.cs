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
    public class FavoritesController : ControllerBase
    {
        private IDAL dal;
        public FavoritesController(IDAL dal)
        {
            this.dal = dal;
        }

        //get favorites
        [HttpGet("{userID}")]
        public IEnumerable<Favorites> GetFavorites(long userID)
        {
            return dal.GetFavorites(userID);
        }

        //set 
        [HttpPost("add")]
        public long AddFavorite(Favorites newFavorite)
        {
            return dal.AddFavorite(newFavorite);
        }

        //update
        [HttpPut("update")]
        public bool UpdateFavorite(Favorites newFavorite)
        {
            return dal.UpdateFavorite(newFavorite);
        }

        //delete
        [HttpDelete("delete/{id}")]
        public void DeleteFavorite(long id)
        {
            dal.DeleteFavorite(id);
        }
    }
}
