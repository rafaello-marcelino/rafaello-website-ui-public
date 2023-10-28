import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../email';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient,) {
   }
  
  public sendEmail(email: Email): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiServerUrl}/email/send`, email, {headers:headers , responseType: 'text' });
  }

  public testConnection(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/email/test`);
  }
}
