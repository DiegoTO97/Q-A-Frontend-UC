import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/user';
  }

  //http://localhost:5205/api/user
  saveUser(user: User): Observable<any>
  {
    return this.http.post(this.myAppUrl + this.myApiUrl, user);
  }
}
