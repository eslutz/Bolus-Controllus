import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsulinDuration } from '../interfaces/InsulinDuration';

@Injectable({
  providedIn: 'root'
})
export class InsulinDurationService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/insulinduration";

  GetDuration(userID: number) {
    return this.http.get<InsulinDuration>(`${this.APIurl}/${userID}`);
  }

  AddDuration(newDuration: InsulinDuration) {
    return this.http.post<InsulinDuration>(`${this.APIurl}/add`, newDuration);
  }

  UpdateDuration(newDuration: InsulinDuration) {
    return this.http.put<InsulinDuration>(`${this.APIurl}/update`, newDuration);
  }
}
