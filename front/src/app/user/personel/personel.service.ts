import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  private baseUrl = 'http://localhost:3000/api/signup';

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
}