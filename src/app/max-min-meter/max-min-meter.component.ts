import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.css']
})
export class MaxMinMeterComponent implements OnInit {
@Input() MinLabel = 'MinLabel';
@Input() MaxLabel = 'MaxLabel';
  constructor() { }

  ngOnInit(): void {
  }

}
