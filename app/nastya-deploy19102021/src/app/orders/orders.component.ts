import { Component, OnInit } from '@angular/core';
// import { linkManager, sendCustomMessage } from '@luigi-project/client';
// import * as LuigiClient from '@luigi-project/client';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    // public linkManager : linkManager,
    // public sendCustomMessage: sendCustomMessage
  ) { }

  ngOnInit(): void {
    // this.sendCustomMessage({ id: 'my-custom-message.changeConfig' });
    // this.linkManager().navigate('/orders');
  }

}
