import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  readonly list_order$ = this.store.select((item: any) => item.phone.list_order)
  readonly total_order$ = this.store.select((item: any) => Number(item.phone.total_order_phone).toLocaleString('en-US'))
  readonly vat$ = this.store.select((item: any) => Number(item.phone.vat).toLocaleString('en-US'))
  readonly shipping$ = this.store.select((item: any) => Number(item.phone.shipping).toLocaleString('en-US'))
  readonly discount$ = this.store.select((item: any) => Number(item.phone.discount).toLocaleString('en-US'))
  readonly total$ = this.store.select((item: any) => Number(item.phone.total_cash).toLocaleString('en-US'))
  constructor(private store: Store) { }
  ngOnInit(): void {

  }

  sendEmail() {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'papbap2xxO@gmail.com',
        pass: 'An123456789', // Use an App Password or store this securely
      },
    });

    const mailOptions = {
      from: 'papbap2xxO@gmail.com',
      to: 'ngonhathuy6878@gmail.com',
      subject: 'Test email',
      html: '<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
