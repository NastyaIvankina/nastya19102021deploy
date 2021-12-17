import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LuigiAngularSupportModule } from '@luigi-project/client-support-angular'


const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    data: { luigiRoute: '/mandi-view-group/orders'} }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  LuigiAngularSupportModule
  ]
})

export class AppRoutingModule { }
