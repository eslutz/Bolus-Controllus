import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorites, FavoriteItem } from '../interfaces/Favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/favorites";

  GetFavorites(userID: number) {
    return this.http.get<Favorites>(`${this.APIurl}/${userID}`);
  }

  AddFavorite(newFavorite: FavoriteItem) {
    return this.http.post<FavoriteItem>(`${this.APIurl}/add`, newFavorite);
  }

  UpdateFavorite(newFavorite: FavoriteItem) {
    return this.http.put<FavoriteItem>(`${this.APIurl}/update`, newFavorite);
  }

  DeleteFavorite(id: number) {
    return this.http.delete(`${this.APIurl}/delete/${id}`);
  }
}
