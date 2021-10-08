import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full'},
                        {path: 'customer', component: CustomerComponent},
                        {path: 'claims', component: ClaimComponent},
                        {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

