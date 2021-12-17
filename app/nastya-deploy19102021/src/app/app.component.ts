import { Component } from '@angular/core';
import { LuigiNavigationService } from './services/luigi-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Try to deploy';
  constructor(
    private router: Router,
    private navigationService: LuigiNavigationService
  ) {

  }

  onOrdersClick(): void {
    debugger;
    this.navigationService.updateLuigiNavigationNodes();
    this.router.navigate(['orders']);
}

}