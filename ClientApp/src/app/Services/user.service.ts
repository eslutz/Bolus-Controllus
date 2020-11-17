import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, FullUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/boluscontrollus";

  GetUser(username: string) {
    return this.http.get<User>(`${this.APIurl}/${username}`);
  }

  GetAllUserSettings(userID: number) {
    return this.http.get<FullUser>(`${this.APIurl}/fulluser/${userID}`)
  }
}
