using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("CarbRatio")]
	public class CarbRatio
	{
		[Key]
		public long id { get; set; }
		public long userID { get; set; }
		public long carbRatio { get; set; }
		//public DateTime carbStartTime { get; set; }
		//public DateTime carbEndTime { get; set; }
	}
}
