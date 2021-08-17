import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-requset-get-obj';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent implements OnInit {
 BookList:Book[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books').subscribe(
      Response=>{
        this.BookList = Response;
      }
      );
  }

}