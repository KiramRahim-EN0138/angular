import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //instantiate httpClient
  constructor(private http: HttpClient) { }

  getAllClaims():Observable<any>{
    //build url
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/`
    //make a request
    return this.http.get(url)

  }
}
