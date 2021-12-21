import { Router, NavigationStart, Event, RouterEvent} from '@angular/router';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { sendCustomMessage } from '@luigi-project/client';
import * as luigiClient from '@luigi-project/client';

@Injectable({
  providedIn: 'root'
})
export class LuigiNavigationService {
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router) {
    // const orderPath = '/orders';
    // this.subscriptions.add(
    //   this.router.events
    //     .pipe(
    //       filter(ev => ev instanceof NavigationStart)
    //     ).subscribe( ev => {
    //       console.log(ev);
    //       if (ev instanceof NavigationStart && ev.url === orderPath) {
    //         debugger;
    //         console.log(ev);
    //         this.updateLuigiNavigationNodes();
    //       }
    //     })
    // );
  }

  updateLuigiNavigationNodes(): void {
    debugger;
    luigiClient.sendCustomMessage({ id: 'my-custom-message.changeConfig' });
  }

  // showHiddenNodes(): void {
  //   luigiClient.sendCustomMessage({ id: 'my-custom-message.showHidden' });
  // }

  navigateToLuigi(): void {
    luigiClient.linkManager().navigate('/mandi-view-group/orders');
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
}
