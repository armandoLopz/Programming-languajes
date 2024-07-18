import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/booksLaravel.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://127.0.0.1:8000/books";
  constructor(private http: HttpClient) { }

  public getData(): Observable<Book[]>{
    
    return this.http.get<Book[]>(this.url);
  }
}