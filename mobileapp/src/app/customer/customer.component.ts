// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
// export class CustomerComponent implements OnInit {

//   apiData = {};
//   idData = {};
//   apiDelete = {};
//   customer_id = '';


//   constructor(private api: ApiService) { }

//   ngOnInit(): void {
//   }

//   handleGetAll(){
//     this.api.getAllCustomers().subscribe((data) => {this.apiData = data});
//   }

//   assignId(idIn : string): void{
//     console.log(idIn);
//     this.handleGetByID(idIn);
//   }

//   handleGetByID(val: string){
//     this.api.getCustomerByID(val).subscribe((data) => {this.idData = data});
//   }

//   assignId_Del(idIn : string): void{
//     console.log(idIn);
//     this.customer_id = idIn;
//     this.handleDeleteByID();
//   }

//   handleDeleteByID(){
//     console.log(this.customer_id);
//     this.api.deleteCustomerByID(this.customer_id).subscribe((data) => {this.apiDelete = data});
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomerData:any;
  customerData:any;

  apiDelete = {};
  customer_id = '';


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showAllCustomers();
    this.showCustomerDetails();
  }


  handleGetAll(){
    this.api.getAllCustomers().subscribe((data) => {this.allCustomerData = data});
  }

  getCustomerById(idIn : string): void{
    console.log(idIn);
    this.handleGetByID(idIn);
  }

  handleGetByID(val: string){
    this.api.getCustomerByID(val).subscribe((data) => {this.customerData = data});
  }

  assignId_Del(idIn : string): void{
    console.log(idIn);
    this.customer_id = idIn;
    this.handleDeleteByID();
  }

  handleDeleteByID(){
    console.log(this.customer_id);
    this.api.deleteCustomerByID(this.customer_id).subscribe((data) => {});
  }

  showCustomerDetails(){
    this.handleGetByID("2");
  }

  showAllCustomers(){
    this.handleGetAll();
  }
  
}
