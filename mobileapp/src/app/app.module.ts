import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ClaimComponent } from './claim/claim.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
//import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ClaimComponent,
    //LoginComponent,
    NavComponent,
    DemoComponent,
    HomeComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
