using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Models
{
	[Table("CorrectionRatio")]
	public class CorrectionRatio
	{
		[Key]
		public long id { get; set; }
		public long userID { get; set; }
		public long correctionRatio { get; set; }
		//public DateTime correctionStartTime { get; set; }
		//public DateTime correctionEndTime { get; set; }
	}
}
