import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pick-amount',
  templateUrl: './pick-amount.component.html',
  styleUrls: ['./pick-amount.component.css']
})
export class PickAmountComponent implements OnInit {

  @Output() newBet = new EventEmitter<number>();
  @Output() clearBet = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addAmount(amt:number) {
    this.newBet.emit(amt);
  }

  clearAmount() {
    this.clearBet.emit(true);
  }
}
