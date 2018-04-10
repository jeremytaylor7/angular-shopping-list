import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../interfaces/item';
import {AddItemService} from '../services/add-item.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {


  
  @Input() listItems: string[] = [];

  constructor() { }

  deleteItem(i: number) {
    this.listItems.splice(i, 1)
  }
  ngOnInit() {
  }

}
