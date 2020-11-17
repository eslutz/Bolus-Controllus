using BolusControllus.Models;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Services
{
	public class DAL : IDAL
	{
		private string connString;
		public DAL(IConfiguration config)
		{
			connString = config.GetConnectionString("Eric");
		}

		//Carb Ratio
		public IEnumerable<CarbRatio> GetCarbRatio(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Query<CarbRatio>($"SELECT * FROM CarbRatio WHERE userID = {userID}");
		}
		public long AddCarbRatio(CarbRatio newCarbRatio)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newCarbRatio);
		}
		public bool UpdateCarbRatio(CarbRatio newCarbRatio)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Update(newCarbRatio);
		}
		public void DeleteCarbRatio(long id)
		{
			SqlConnection conn = new SqlConnection(connString);
			conn.Delete(new CarbRatio() { id = id });
		}

		//Correction Ratio
		public IEnumerable<CorrectionRatio> GetCorrectionRatio(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Query<CorrectionRatio>($"SELECT * FROM CorrectionRatio WHERE userID = {userID}");
		}
		public long AddCorrectionRatio(CorrectionRatio newCorrectionRatio)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newCorrectionRatio);
		}
		public bool UpdateCorrectionRatio(CorrectionRatio newCorrectionRatio)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Update(newCorrectionRatio);
		}
		public void DeleteCorrectionRatio(long id)
		{
			SqlConnection conn = new SqlConnection(connString);
			conn.Delete(new CorrectionRatio() { id = id });
		}

		//Favorites
		public IEnumerable<Favorites> GetFavorites(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Query<Favorites>($"SELECT * FROM Favorites WHERE userID = {userID}");
		}
		public long AddFavorite(Favorites newFavorite)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newFavorite);
		}
		public bool UpdateFavorite(Favorites newFavorite)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Update(newFavorite);
		}
		public void DeleteFavorite(long id)
		{
			SqlConnection conn = new SqlConnection(connString);
			conn.Delete(new Favorites() { id = id });
		}

		//History
		public IEnumerable<History> GetHistory(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Query<History>($"SELECT * FROM History WHERE userID = {userID} ORDER BY time DESC");
		}
		public long AddHistory(History newHistory)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newHistory);
		}
		public void DeleteHistory(long id)
		{
			SqlConnection conn = new SqlConnection(connString);
			conn.Delete(new History() { id = id });
		}
		public double GetActiveInsulin(long userID, long insulinDuration)
		{
			List<double> insulinLeftPerBolus = new List<double>();
			SqlConnection conn = new SqlConnection(connString);
			List<ActiveInsulin> insulinWithinWindow = conn.Query<ActiveInsulin>($"SELECT [insulin], [time] FROM History WHERE userID = {userID} AND [time] >= DATEADD(hh, -{insulinDuration}, GETUTCDATE())").ToList();
			foreach(ActiveInsulin dose in insulinWithinWindow)
			{
				double rate = (double)dose.insulin / (double)insulinDuration;
				TimeSpan timeDifference = dose.time - DateTime.UtcNow;
				double timePassed = Math.Abs(timeDifference.TotalHours);
				insulinLeftPerBolus.Add((double)dose.insulin - (rate * timePassed));
			}
			double activeInsulin = Math.Round(insulinLeftPerBolus.Sum(), 2);
			return activeInsulin;
		}

		//Insulin Duration
		public InsulinDuration GetInsulinDuration(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.QueryFirst<InsulinDuration>($"SELECT * FROM InsulinDuration WHERE userID = {userID}");
		}
		public long AddInsulinDuration(InsulinDuration newInsulinDuration)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newInsulinDuration);
		}
		public bool UpdateInsulinDuration(InsulinDuration newInsulinDuration)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Update(newInsulinDuration);
		}

		//User
		public User GetUser(string username)
		{
			SqlConnection conn = new SqlConnection(connString);
			conn.Open();
			SqlCommand cmd = new SqlCommand("GetUser", conn);
			cmd.Parameters.Clear();
			cmd.CommandType = CommandType.StoredProcedure;
			cmd.Parameters.AddWithValue("@username", SqlDbType.NVarChar).Value = username;
			SqlParameter retrieval = cmd.Parameters.Add("@userID", SqlDbType.Int);
			retrieval.Direction = ParameterDirection.Output;
			cmd.ExecuteNonQuery();
			int returnID = (int)cmd.Parameters["@userID"].Value;
			conn.Close();
			long userID = returnID;
			return conn.QueryFirst<User>($"SELECT * FROM [User] WHERE userID = ${userID}");
		}
		public long AddUser(User newUser)
		{
			SqlConnection conn = new SqlConnection(connString);
			return conn.Insert(newUser);
		}
		public FullUser GetAllUserSettings(long userID)
		{
			SqlConnection conn = new SqlConnection(connString);
			string queryCommand = $"SELECT [User].userID, username, carbRatio, carbStartTime, carbEndTime, correctionRatio, correctionStartTime, correctionEndTime, duration from [User] JOIN [CarbRatio] on [User].userID = [CarbRatio].userID JOIN [CorrectionRatio] on [User].userID = [CorrectionRatio].userID JOIN [InsulinDuration] on [User].userID = [InsulinDuration].userID WHERE [User].userID = {userID}";
			return conn.QueryFirst<FullUser>(queryCommand);
		}

	}
}
