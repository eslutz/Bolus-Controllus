import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { History, HistoryItem } from '../interfaces/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/history";

  GetHistory(userID: number) {
    return this.http.get<History>(`${this.APIurl}/${userID}`);
  }

  AddHistory(newHistory: HistoryItem) {
    return this.http.post<HistoryItem>(`${this.APIurl}/add`, newHistory);
  }

  DeleteHistory(id: number) {
    return this.http.delete(`${this.APIurl}/delete/${id}`);
  }

  GetActiveInsulin(userID: number, insulinDuration: number) {
    return this.http.get<number>(`${this.APIurl}/${userID}/${insulinDuration}`);
  }
}
