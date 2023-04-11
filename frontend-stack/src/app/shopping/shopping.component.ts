import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  constructor(private cartService: CartService) {}
  shoppingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shoppingCosts = this.cartService.getShoppingPrices();
  }

}
