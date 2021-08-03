import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeButtonComponent } from './welcome/welcome-button/welcome-button.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CareerComponent } from './career/career.component';
import { CareerBranchComponent } from './career/career-branch/career-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeButtonComponent,
    AboutMeComponent,
    ContactMeComponent,
    CareerComponent,
    CareerBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
