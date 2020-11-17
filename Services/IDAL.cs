using BolusControllus.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BolusControllus.Services
{
	public interface IDAL
	{
		//Carb Ratio
		IEnumerable<CarbRatio> GetCarbRatio(long userID);
		long AddCarbRatio(CarbRatio newCarbRatio);
		bool UpdateCarbRatio(CarbRatio newCarbRatio);
		void DeleteCarbRatio(long id);

		//Correction Ratio
		IEnumerable<CorrectionRatio> GetCorrectionRatio(long userID);
		long AddCorrectionRatio(CorrectionRatio newCorrectionRatio);
		bool UpdateCorrectionRatio(CorrectionRatio newCorrectionRatio);
		void DeleteCorrectionRatio(long id);

		//Favorites
		IEnumerable<Favorites> GetFavorites(long userID);
		long AddFavorite(Favorites newFavorite);
		bool UpdateFavorite(Favorites newFavorite);
		void DeleteFavorite(long id);

		//History
		IEnumerable<History> GetHistory(long userID);
		long AddHistory(History newHistory);
		void DeleteHistory(long id);
		double GetActiveInsulin(long userID, long insulinDuration);

		//Insulin Duration
		InsulinDuration GetInsulinDuration(long userID);
		long AddInsulinDuration(InsulinDuration newInsulinDuration);
		bool UpdateInsulinDuration(InsulinDuration newInsulinDuration);

		//User
		User GetUser(string username);
		long AddUser(User newUser);
		FullUser GetAllUserSettings(long userID);

	}
}
