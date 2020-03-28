import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  receiverName = '';
  paymentDate = '';
  amount = 0;
  miles = 0;
  onChangeReceiver(enterReceiver: string) {
  this.receiverName = enterReceiver;
  }
  onChangePayment(value: string) {
  this.paymentDate = value;
  }
  onChangeAmount(value: number) {
  this.amount = value;
  }
  onChangeMiles(value: number) {
    this.miles = value;
    }

}
