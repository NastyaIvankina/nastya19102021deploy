import { Component, OnInit } from '@angular/core';
// import { linkManager, sendCustomMessage } from '@luigi-project/client';
// import * as LuigiClient from '@luigi-project/client';
import { LuigiNavigationService } from '../services/luigi-navigation.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private navigationService: LuigiNavigationService
    // public linkManager : linkManager,
    // public sendCustomMessage: sendCustomMessage
  ) {   
    // this.navigationService.updateLuigiNavigationNodes();
    // this.navigationService.showHiddenNodes();
    // this.navigationService.navigateToLuigi();
   }

  ngOnInit(): void {
    // this.sendCustomMessage({ id: 'my-custom-message.changeConfig' });
    // this.navigationService.updateLuigiNavigationNodes();
    // this.linkManager().navigate('/orders');
    // this.navigationService.navigateToLuigi();
  }

}
