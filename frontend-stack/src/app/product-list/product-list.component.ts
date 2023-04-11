import { Component } from '@angular/core';
import { products } from '../products';
import { DatabaseService } from '../database.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product [] = [];
  constructor(private database:DatabaseService) {
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/