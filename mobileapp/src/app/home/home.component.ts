import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerData:any;
  constructor(private api:ApiService) { }


  ngOnInit(): void {
    this.api.getCustomerByID('2').subscribe((data) => {this.customerData = data});
  }

  showCustomerDetails(){
  }

}
