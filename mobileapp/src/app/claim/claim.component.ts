// import { Component, Input, OnInit, Output , NgModule} from '@angular/core';
// import { ApiService } from '../api.service';
// @Component({
//   selector: 'app-claim',
//   templateUrl: './claim.component.html',
//   styleUrls: ['./claim.component.css']
// })
// export class ClaimComponent implements OnInit {
//   apiData:string = '';
//   apiDelete:string =  '';
//   apiPost:string =  '';
//   idData:string = '';

//   @Input () claim_id: string = '';
//   claimIn : string = '';
//   idIn : string = '';
//   constructor(private api: ApiService){​}​

//   ngOnInit(): void {
//   }

//   assignClaimID(claimIn : string):void {
//     this.claim_id = claimIn;
//     this.handleDeleteByID();
//   }

//   assignId(idIn : string): void{
//     console.log(idIn);
//     this.handleGetID(idIn);
//   }
  
//   handleGetAll(){
//     this.api.getAllClaims().subscribe((data) => {this.apiData = data});
//   }

//   handleGetID(val:string){

//     // emit custom event
//     this.api.getClaim(val).subscribe((data) => {this.idData = data});

//   }

//   handleAddClaim(){

//     // emit custom event

//     this.api.postClaim().subscribe((data) => {this.apiPost = data});
//   }

//   makePostCall(){
//     let payload = {'claim_id' : '008',
//     'category' : 'heart',
//     'customer_id': '3',
//     'price': '35,000',
//     'status': 'active'}
//     this.api.getFromAPI()
//       .subscribe( (resp)=>{
//         console.log(resp)
//       } )
//   }

//   handleDeleteByID(){
//     console.log(this.claim_id);
//     this.api.deleteByID(this.claim_id).subscribe((data) => {this.apiDelete = data});
//   }
// }
import { Component, Input, OnInit, Output , NgModule} from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerComponent } from '../customer/customer.component';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  allClaimsData:any;
  claimsData:any;

  apiDelete:string =  '';
  apiPost:string =  '';
  

  @Input () claim_id: string = '';
  claimIn : string = '';
  idIn : string = '';
  constructor(private api: ApiService){​}​

  ngOnInit(): void {
    this.handleGetAll()
  }

  assignClaimID(claimIn : string):void {
    this.claim_id = claimIn;
    this.handleDeleteByID();
  }

  assignId(idIn : string): void{
    console.log(idIn);
    this.handleGetID(idIn);
  }
  
  handleGetAll(){
    this.api.getAllClaims().subscribe((data) => {this.allClaimsData = data});
  }

  handleGetID(val:string){

    // emit custom event
    this.api.getClaim(val).subscribe((data) => {this.claimsData = data});

  }

  // handleAddClaim(){

  //   // emit custom event

  //   this.api.postClaim().subscribe((data) => {this.apiPost = data});
  // }

  postClaim(){
    //build url
    
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json; charset=UTF-8"

    //   })
    // };
    
    let claimInfo = {
        "claim_id" : "007",
        "category" : "heart",
        "customer_id": "3",
        "price": "35,000",
        "status": "active"
      }
      fetch('https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/',
      {
                  mode: "no-cors",
                  method: "PUT",
                  body: JSON.stringify(claimInfo),
                  headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json())
              .then(json => console.log(json))
              .catch(err => console.log(err));
    // let url = `https://92jpr1aipd.execute-api.eu-west-1.amazonaws.com/Prod/`
    //make a request
    // return this.http.post(url,claimInfo,httpOptions)

  }


  handleDeleteByID(){
    console.log(this.claim_id);
    this.api.deleteByID(this.claim_id).subscribe((data) => {this.apiDelete = data});
  }
 
}
