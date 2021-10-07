import { Component, Input, OnInit, Output , NgModule} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // @Output(){

    //user = {username:'', password:''}
//  }
  constructor() { }

  ngOnInit(): void {
  }

}
