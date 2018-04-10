import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adder-form',
  templateUrl: './adder-form.component.html',
  styleUrls: ['./adder-form.component.scss']
})
export class AdderFormComponent implements OnInit {

  inputVal: string = '';
  items: string[] = [];
  constructor() { }

  onClick(e: any){
    this.items.push(this.inputVal);
  }

  onKey(e: any) {
    this.inputVal = e.target.value;
  }

  ngOnInit() {
  }

}
