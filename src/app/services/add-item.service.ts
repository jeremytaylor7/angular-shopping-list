import { Injectable } from '@angular/core';

@Injectable()
export class AddItemService {



  constructor() { }

  addItem(item: string) {
    alert('service works');
  }

}
