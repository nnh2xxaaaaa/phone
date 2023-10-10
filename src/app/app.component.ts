import { Component } from '@angular/core';
import Spreadsheet from "x-data-spreadsheet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible = false;

  open(): void {
    this.visible = true;

  }

  close(): void {
    this.visible = false;
  }
}
