import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://gutendex.com/books/";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
