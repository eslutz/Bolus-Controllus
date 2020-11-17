using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("Favorites")]
	public class Favorites
	{
		[Key]
		public long id { get; set; }
		public long userID { get; set; }
		public string mealName { get; set; }
		public long mealCarbs { get; set; }
	}
}
