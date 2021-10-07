import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  apiData = {};
  idData = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  handleGetAll(){
    this.api.getAllCustomers().subscribe((data) => {this.apiData = data});
  }

  assignId(idIn : string): void{
    console.log(idIn);
    this.handleGetByID(idIn);
  }

  handleGetByID(val: string){
    this.api.getCustomerByID(val).subscribe((data) => {this.idData = data});
  }

}
