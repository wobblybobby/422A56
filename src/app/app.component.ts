import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WheWheLottery';
  newBetAmt:number = 0;
  lottoNumbers:number[] = [];

  addBetAmt(amt:number) {
    this.newBetAmt += amt;
  }

  clear(clr:boolean) {
    if (clr == true)
      this.newBetAmt = 0;
  }

  addToSelection(x:{num:number, isPressed:boolean}) {
    if (this.lottoNumbers.length >= 0 && this.lottoNumbers.length < 5 && x.isPressed == false)
    {
      this.lottoNumbers.push(x.num);
    }
  }

  clearSelection(clr:boolean) {
    if (clr == true)
    {
      this.lottoNumbers = [];
      this.newBetAmt = 0;
    }
  }
}