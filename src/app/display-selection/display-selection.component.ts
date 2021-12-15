import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-selection',
  templateUrl: './display-selection.component.html',
  styleUrls: ['./display-selection.component.css']
})
export class DisplaySelectionComponent implements OnInit {

  @Input() betAmount:number = 0;
  @Input() chosenNums:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
