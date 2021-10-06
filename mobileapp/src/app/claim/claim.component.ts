import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  apiData:string = '';

  constructor(private api: ApiService){​}​

  ngOnInit(): void {
  }
  handleGetAll(){
    // emit custom event
    this.api.getAllClaims().subscribe((data) => {this.apiData = data});
 
  }

  handleGetID(){

    // emit custom event
    this.api.getClaim().subscribe((data) => {this.apiData = data});

    }


  }