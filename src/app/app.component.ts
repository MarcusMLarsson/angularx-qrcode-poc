import { Component } from '@angular/core';

export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public qrdata: string = null;
  public qrwidth: any = null;

  constructor() {
    this.qrdata = 'Type here for new QR!';
    this.qrwidth = 256;
  }

  increaseWidth(): void {
    this.qrwidth = this.qrwidth + 25;
  }

  decreaseWidth(): void {
    this.qrwidth = this.qrwidth - 25;
  }
}
