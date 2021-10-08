import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

// Allow CORS



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //instantiate httpClient
  constructor(private http: HttpClient) { 
  
  }


    // try to make a POST request
    getFromAPI() {
      // a sample API that handles POST requests
      let claimInfo = {
        "claim_id" : "008",
        "category" : "heart",
        "customer_id": "3",
        "price": "35,000",
        "status": "active"
      }
      let claimInfoJ = JSON.stringify(claimInfo)
      let url = 'https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/'
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'charset':'UTF-8', // careful - the server may actively DISLIKE these headers!!!
          // 'Accept':'application/json',
          // 'Access-Control-Allow-Origin':'http://localhost:4200',
        })
      }

      return this.http.post(url, claimInfoJ,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

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


// method to handle any http errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something unexpected happened');
};



  }