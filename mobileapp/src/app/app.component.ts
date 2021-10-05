import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiData = {};
  data: string = '';

  //methods for this component
  constructor(private apiService:ApiService){}

  handleDataEvent(evt:any){ 
    this.data = evt;
  }
  makeServiceCall(){
    this.apiService.getAllClaims().subscribe((apiData) => {this.apiData = apiData});
  }
}
