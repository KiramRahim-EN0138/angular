import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [{path: 'customer', component: CustomerComponent},
                        {path: 'claims', component: ClaimComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

