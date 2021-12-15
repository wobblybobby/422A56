import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pick-numbers',
  templateUrl: './pick-numbers.component.html',
  styleUrls: ['./pick-numbers.component.css']
})
export class PickNumbersComponent implements OnInit {

  availableNums: {num:number, isPressed:boolean}[] = [];
  
  @Input() chosenNums:number[] = [];
  @Output() selectedNumber = new EventEmitter<{ num:number, isPressed:boolean}>();
  @Output() clearNumbers = new EventEmitter<boolean>();

  constructor() { 
    for (let i = 0; i < 20; i++) {
      this.availableNums.push({ "num" : i+1, "isPressed" : false })
    }
  }

  ngOnInit(): void {
  }

  addSelection(selection:{num:number, isPressed:boolean}) {
    if (selection.isPressed == false && this.chosenNums.length >= 0 && this.chosenNums.length < 5) {
      this.selectedNumber.emit(selection);
      selection.isPressed = true;
    }
  }

  clearAmount() {
    this.clearNumbers.emit(true);
    this.availableNums.forEach(element => {
      element.isPressed = false;      
    });
  }

  checkLessThanFive() {
    if (this.chosenNums.length == 5)
      return false;
    else
      return true;
  }

  cashOutAlert()
  {
    window.alert("Cashing out! (Functionality not included)")
  }
}
