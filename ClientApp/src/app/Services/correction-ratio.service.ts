import { Injectable } from '@angular/core';
import { CorrectionRatio, CorrectionRatioItem } from '../interfaces/CorrectionRatio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorrectionRatioService {
  constructor(private http: HttpClient) { }

  APIurl: string = "/api/correctionratio";

  GetCorrectionRatio(userID: number) {
    return this.http.get<CorrectionRatio>(`${this.APIurl}/${userID}`);
  }

  AddCorrectionRatio(newCorrectionRatio: CorrectionRatioItem) {
    return this.http.post<CorrectionRatioItem>(`${this.APIurl}/add`, newCorrectionRatio);
  }

  UpdateCorrectionRatio(newCorrectionRatio: CorrectionRatioItem) {
    return this.http.put<CorrectionRatioItem>(`${this.APIurl}/update`, newCorrectionRatio);
  }

  DeleteCorrectionRatio(id: number) {
    return this.http.delete(`${this.APIurl}/delete/${id}`);
  }
}
