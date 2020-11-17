import { Component } from '@angular/core';
import { FavoritesService } from '../Services/favorites.service';
import { Favorites, FavoriteItem} from '../interfaces/Favorites';
import { User } from '../interfaces/User';
import { GlobalUser } from '../globaluser';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
/** favorites component*/
export class FavoritesComponent {
  user: User;
  favorite: Favorites;
  isHidden: boolean = true;
  hiddenButton1: boolean = true;
  hiddenButton2: boolean = true;
  name: string = "";
  carbs: number = 0;
  currentFav: number;
  newFav: FavoriteItem = {
    id: -1,
    userID: 1,
    mealName: 'test',
    mealCarbs: 5
  };
  message: string = "";
  totalCarbs: number = 0;
  active: boolean = false;

  /** favorites ctor */
  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    setTimeout(() => this.favoriteService.GetFavorites(GlobalUser.userID).subscribe((data: Favorites) => this.favorite = data), 5);
  }

  //Deletes selected favorite item and refreshes the list.
  deleteFavorite(id: number): void {
    this.favoriteService.DeleteFavorite(id).subscribe((data) => this.ngOnInit());
  }

  //Add a new favorite item.
  addFavorite(): void {
    this.name = "";
    this.carbs = 0;
    this.isHidden = false;
    this.hiddenButton1 = false;
    this.hiddenButton2 = true;
  }

  //Edits an existing favorite item.
  editFavorite(fav: FavoriteItem): void {
    this.name = fav.mealName;
    this.carbs = fav.mealCarbs;
    this.currentFav = fav.id;
    this.isHidden = false;
    this.hiddenButton1 = true;
    this.hiddenButton2 = false;
  }

  //Saves a new item.
  saveNewFavorite(): void {
    if (this.carbs > 0) {
      this.newFav.userID = GlobalUser.userID;
      this.newFav.mealName = this.name;
      this.newFav.mealCarbs = Math.round(this.carbs);
      this.favoriteService.AddFavorite(this.newFav).subscribe((data) => this.ngOnInit());
      this.isHidden = true;
      this.hiddenButton1 = true;
      this.message = "";
    }
    else {
      this.message = "Please enter a positive number.";
    }
  }

  //Saves updates to an exisiting item.
  updateFavorite(): void {
    if (this.carbs > 0) {
      this.newFav.id = this.currentFav;
      this.newFav.userID = GlobalUser.userID;
      this.newFav.mealName = this.name;
      this.newFav.mealCarbs = Math.round(this.carbs);
      this.favoriteService.UpdateFavorite(this.newFav).subscribe((data) => this.ngOnInit());
      this.isHidden = true;
      this.hiddenButton2 = true;
      this.message = "";
    }
    else {
      this.message = "Please enter a positive number.";
    }
  }

  //Cancels and hides form.
  cancelFavorite(): void {
    this.isHidden = true;
    this.hiddenButton1 = true;
    this.hiddenButton2 = true;
    this.currentFav = -1;
    this.message = "";
  }

  sumCarbs(carbs: number, id: string): void {
    let checkbox = <HTMLInputElement> document.getElementById(id);
    if (checkbox.checked) {
      this.totalCarbs = this.totalCarbs + carbs;
    }
    else {
      this.totalCarbs = this.totalCarbs - carbs;

    }
  }
}
