import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-cart-is-empty',
  templateUrl: './order-cart-is-empty.component.html',
  styleUrls: ['./order-cart-is-empty.component.scss']
})
export class OrderCartIsEmptyComponent {
  constructor(private router: Router) { }

  contiounShoppoing() {
    this.router.navigate(['/list-products'])
  }
}
