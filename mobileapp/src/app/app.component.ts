import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'arch';
  data:string = '' 
  receivedData = {}

  //methods for this component
  // we need constructor to instantiate our service

  constructor(private apiService:ApiService){}
  handleDataEvent(evt:any){ //typescrit needs data type
    // here we handle custom dataEvent coming from login component
    this.data = evt
  }
  makeServiceCall(){
    this.apiService.getAllClaims().subscribe((apiData) => {this.receivedData = apiData});

  }}
