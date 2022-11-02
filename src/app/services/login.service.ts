import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;


  constructor(private http: HttpClient) 
  { 
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/Login';
  }

  login(user: User): Observable<any>
  {
    return this.http.post(this.myAppUrl + this.myApiUrl, user);
  }

  setLocalStorage(data:string): void {
    localStorage.setItem('userName', data);
  }

  getUserName(): string{
    return localStorage.getItem('userName')!.toString();
  }

  removeLocalStorage(): void{
    localStorage.removeItem('userName');
  }

}
