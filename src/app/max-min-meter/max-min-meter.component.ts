import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.css']
})
export class MaxMinMeterComponent implements OnInit {
  @Input() MinLabel = 'MinLabel';
  @Input() MaxLabel = 'MaxLabel';

  @Output() MinChange = new EventEmitter();
  @Output() MaxChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  doMinChange(value: number) {
    this.MinChange.emit(value);
  }
  doMaxChange(value: number) {
    this.MaxChange.emit(value);
  }

}
