import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent {
  isVisible = false;

  constructor(private router: Router) { }

  showModal(): void {
    this.isVisible = true;
    this.router.navigate(['list-prdducts'])
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


}
