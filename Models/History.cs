using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("History")]
	public class History
	{
		[Key]
		public long id { get; set; }
		public long userID { get; set; }
		public long bloodGlucose { get; set; }
		public long carbs { get; set; }
		public long insulin { get; set; }
		public DateTime time { get; set; }
	}
}
