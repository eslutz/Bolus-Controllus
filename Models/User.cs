using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("User")]
	public class User
	{
		[Key]
		public int userID { get; set; }
		public string username { get; set; }
	}

	public class FullUser
	{
		public int userID { get; set; }
		public string username { get; set; }
		public long carbRatio { get; set; }
		//public DateTime carbStartTime { get; set; }
		//public DateTime carbEndTime { get; set; }
		public long correctionRatio { get; set; }
		//public DateTime correctionStartTime { get; set; }
		//public DateTime correctionEndTime { get; set; }
		public long duration { get; set; }
	}
	
}
