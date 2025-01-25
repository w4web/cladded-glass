import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any> {
    return this.http.get('/assets/jsons/packages.json');
  }

  getServices(): Observable<any> {
    return this.http.get('/assets/jsons/services.json');
  }

  getInstallationQuestions(): Observable<any> {
    return this.http.get('/assets/jsons/installationQuestions.json');
  }

  getAboutUsItems(): Observable<any> {
    return this.http.get('/assets/jsons/aboutUsItems.json');
  }

  getContactInfoItems(): Observable<any> {
    return this.http.get('/assets/jsons/contactInfoItems.json');
  }

  getFaqs(): Observable<any> {
    return this.http.get('/assets/jsons/faqs.json');
  }

  getBlogs(): Observable<any> {
    return this.http.get('/assets/jsons/blogs.json');
  }

  getFooterInfo(): Observable<any> {
    return this.http.get('/assets/jsons/footerInfo.json');
  }

  // Post request

  getQuote(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/getQuote`, data, { observe: 'response' });
  }

  subscribe(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subscribe`, data, { observe: 'response' });
  }

}
