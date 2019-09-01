import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://api.angular-auth.laravel/api/';

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post( `${this.baseUrl}signup`, data);
  }

  login(data) {
    return this.http.post( `${this.baseUrl}login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post( `${this.baseUrl}sendPasswordResetLink`, data);
  }
}
