using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("InsulinDuration")]
	public class InsulinDuration
	{
		[Key]
		public long id { get; set; }
		public long userID { get; set; }
		public long duration { get; set; }
	}
}
