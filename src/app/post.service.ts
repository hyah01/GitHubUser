import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:3000/posts'
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(this.url)
  }
}
