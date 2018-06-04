import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    ProductsComponent,
    UserProfileComponent,
    ContactUsComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'log-out', component: LogOutComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
