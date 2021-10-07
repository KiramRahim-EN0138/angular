import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

// Allow CORS



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //instantiate httpClient
  constructor(private http: HttpClient) { }

  //claims methods
  getAllClaims():Observable<any>{
    //build url
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/`
    //make a request
    return this.http.get(url)
  }

  deleteByID(val:string):Observable<any>{
    console.log(val);
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/${val}`;
    return this.http.delete(url);
  }

  getClaim(val:string):Observable<any>{
    //build url
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/${val}`
    //make a request
    return this.http.get(url)

  }

  postClaim():Observable<any>{
    //build url
    let claimInfo = {

        "claim_id" : "4242",
        "category" : "heart",
        "customer_id": "2",
        "price": "35,000",
        "status": "active"
      }
    
    let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/`
    //make a request
    return this.http.post<any>(url, claimInfo);

  }

  //customer metods
  getAllCustomers() {
    let url = `https://j4jwck9498.execute-api.eu-west-1.amazonaws.com/Prod`
    return this.http.get(url);
  }

  getCustomerByID(val:string){
      //build url
      let url = `https://j4jwck9498.execute-api.eu-west-1.amazonaws.com/Prod/${val}`
      //make a request
      return this.http.get(url)
    }

  deleteCustomerByID(val:string){
      let url = `https://j4jwck9498.execute-api.eu-west-1.amazonaws.com/Prod/${val}`;
      return this.http.delete(url);
    }
  }