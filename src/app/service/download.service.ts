import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public downloadResume(): Observable<any> {
    let  headers= new HttpHeaders({
      'Content-Type':  'application/pdf',
      responseType : 'blob',
      Accept : 'application/pdf',
      observe : 'response'
      })
    return this.http.get(`${this.apiServerUrl}/download`, {
      headers:headers , responseType: 'blob' 
  });
  }

}
