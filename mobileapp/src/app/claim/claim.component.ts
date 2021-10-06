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

  @Input () claim_id: string = '';
  claimIn : string = '';
  constructor(private api: ApiService){​}​

  ngOnInit(): void {
  }

  assignClaimID(claimIn : string):void {
    console.log(claimIn);
    this.claim_id = claimIn;
    this.handleDeleteByID();
  }
  handleGetAll(){
    this.api.getAllClaims().subscribe((data) => {this.apiData = data});
  }

  handleGetID(){

    // emit custom event

    this.api.getClaim().subscribe((data) => {this.apiData = data});

  }

  handleAddClaim(){

    // emit custom event

    this.api.postClaim().subscribe((data) => {this.apiData = data});
  }


  handleDeleteByID(){
    console.log(this.claim_id);
    this.api.deleteByID(this.claim_id).subscribe((data) => {this.apiDelete = data});
  }
}
