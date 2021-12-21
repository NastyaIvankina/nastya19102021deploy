import { Component } from '@angular/core';
import { LuigiNavigationService } from './services/luigi-navigation.service';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Try to deploy';
  private subscriptions: Subscription = new Subscription();
  constructor(
    private router: Router,
    private navigationService: LuigiNavigationService
  ) {
    // const orderPath = '/orders';
    //  this.subscriptions.add(
    //   this.router.events
    //     .pipe(
    //       filter(ev => ev instanceof NavigationStart)
    //     ).subscribe( ev => {
    //       console.log(ev);
    //       debugger;
    //       if (ev instanceof NavigationStart && ev.url === orderPath) {
    //         debugger;
    //         console.log(ev);
    //         this.navigationService.updateLuigiNavigationNodes();
    //       }
    //     })
    // );
  }

  onOrdersClick(): void {
    // debugger;
    this.navigationService.updateLuigiNavigationNodes();
    // this.navigationService.showHiddenNodes();
    this.router.navigate(['orders']);
    this.navigationService.navigateToLuigi();
}

}