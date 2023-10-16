import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-order-phone',
  templateUrl: './complete-order-phone.component.html',
  styleUrls: ['./complete-order-phone.component.scss']
})
export class CompleteOrderPhoneComponent {
  constructor(private router: Router) { }

  pagePhone() {
    this.router.navigate(['/list-products'])
  }
}
