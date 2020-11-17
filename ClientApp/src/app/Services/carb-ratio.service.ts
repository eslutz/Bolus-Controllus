import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarbRatio, CarbRatioItem } from '../interfaces/CarbRatio';

@Injectable({
  providedIn: 'root'
})
export class CarbRatioService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/carbratio";

  GetCarbRatio(userID: number) {
    return this.http.get<CarbRatio>(`${this.APIurl}/${userID}`);
  }

  AddCarbRatio(newCarbRatio: CarbRatioItem) {
    return this.http.post<CarbRatioItem>(`${this.APIurl}/add`, newCarbRatio);
  }

  UpdateCarbRatio(newCarbRatio: CarbRatioItem) {
    return this.http.put<CarbRatioItem>(`${this.APIurl}/update`, newCarbRatio);
  }

  DeleteCarbRatio(id: number) {
    return this.http.delete(`${this.APIurl}/delete/${id}`);
  }
}
