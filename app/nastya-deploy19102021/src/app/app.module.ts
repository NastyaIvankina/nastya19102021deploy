import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LuigiAngularSupportModule } from '@luigi-project/client-support-angular';
import { LuigiNavigationService } from './services/luigi-navigation.service';
// import { sendCustomMessage } from '@luigi-project/client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LuigiAngularSupportModule
  ],
  providers: [LuigiNavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
