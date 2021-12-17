import { Router, NavigationEnd } from '@angular/router';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { sendCustomMessage } from '@luigi-project/client';
import * as luigiClient from '@luigi-project/client';

@Injectable({
  providedIn: 'root'
})
export class LuigiNavigationService {
  // private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router) {}

  updateLuigiNavigationNodes(): void {
    debugger;
    luigiClient.sendCustomMessage({ id: 'my-custom-message.changeConfig' });
    luigiClient.linkManager().navigate('/mandi-view-group/orders');
  }

  

  // ngOnDestroy(): void {
  //   // this.subscriptions.unsubscribe();
  // }
}
