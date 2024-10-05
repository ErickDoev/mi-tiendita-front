import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly url = environment.baseUrl;

  constructor() { }

  login(body: any): Observable<any> {
    return this.http.post(`http://localhost:3000/api/auth/login`, body);
  }

  register(body: any): Observable<any> {
    return this.http.post(`${this.url}/auth/signin`, body);
  }

}
