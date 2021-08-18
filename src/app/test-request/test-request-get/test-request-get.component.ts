import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from './test-requset-get-obj';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent implements OnInit {
 BookList:Book[] = [];
  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.service.HttpBook().subscribe(
      Response=>{
        this.BookList = Response;
      }
      );
  }

  SearchBookList(name:string){
    this.service.HttpBook(name).subscribe(
      Response=>{
        this.BookList = Response;
      }
      );
  }

}