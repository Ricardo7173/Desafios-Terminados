import { Component , Input} from '@angular/core';
import { Product } from '../products';
import { CartService } from "../cart.service";
import {DialogModule} from 'primeng/dialog';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  display: boolean = false;

  constructor(private cartService: CartService) {}

  @Input() product!: Product;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  showDialog() {
    this.display = true;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
