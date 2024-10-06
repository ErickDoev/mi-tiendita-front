import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly http = inject(HttpClient);
  private readonly url = environment.baseUrl;

  constructor() { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.url}/users/9ae51395-d311-450f-a958-0304dfff8929/profile`);
  }

}
