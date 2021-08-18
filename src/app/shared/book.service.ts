import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../test-request/test-request-get/test-requset-get-obj';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  HttpBook(name:string = ''){
    return this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name='+name);
  }
}
