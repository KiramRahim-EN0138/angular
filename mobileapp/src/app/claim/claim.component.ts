import { Component, Input, OnInit, Output , NgModule} from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  apiData:string = '';
  apiDelete:string =  '';
  apiPost:string =  '';
  idData:string = '';

  @Input () claim_id: string = '';
  claimIn : string = '';
  idIn : string = '';
  constructor(private api: ApiService){​}​

  ngOnInit(): void {
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
    this.api.getAllClaims().subscribe((data) => {this.apiData = data});
  }

  handleGetID(val:string){

    // emit custom event
    this.api.getClaim(val).subscribe((data) => {this.idData = data});

  }

  handleAddClaim(){

    // emit custom event

    this.api.postClaim().subscribe((data) => {this.apiPost = data});
  }


  handleDeleteByID(){
    console.log(this.claim_id);
    this.api.deleteByID(this.claim_id).subscribe((data) => {this.apiDelete = data});
  }
}
