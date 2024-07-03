import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl: string ='https://api.github.com/users/'; 

  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}${username}`)
  }
}
