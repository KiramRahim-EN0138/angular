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

  getClaim():Observable<any>{
    //build url
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/008`
    //make a request
    return this.http.get(url)

  }

  postClaim():Observable<any>{
    //build url
    let info = {
      
        "claim_id" : "005",
        "category" : "heart",
        "customer_id": "2",
        "price": "35,000",
        "status": "active"
      }
    
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/${info}`
    //make a request


    return this.http.get(url)

  }


}
