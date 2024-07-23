import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/booksLaravel.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = "http://127.0.0.1:8000/api/books";
  constructor(public http: HttpClient) { }

  public getData(): Observable<Book[]>{
    
    return this.http.get<Book[]>(this.url);
  }


  postBook(book: Book){
    
    return this.http.post<Book>(this.url, book);
  }

  deleteBook(id: number){

    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updateBook(book: Book){

    return this.http.put<any>(`${this.url}/${book.id}`, book);
  }

}