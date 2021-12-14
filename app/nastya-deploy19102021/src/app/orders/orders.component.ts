import { Component, OnInit } from '@angular/core';
import { linkManager, sendCustomMessage } from '@luigi-project/client';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private linkManager : linkManager
  ) { }

  ngOnInit(): void {
    sendCustomMessage({ id: 'my-custom-message.changeConfig' });
    this.linkManager().navigate('/orders');
  }

}
