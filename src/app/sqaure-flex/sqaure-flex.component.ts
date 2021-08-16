import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.css']
})
export class SqaureFlexComponent implements OnInit {

  @Input() divWidth = 200;
  @Input() divHeight = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
