import {Component, View}                                        from "angular2/core";
import {Router}                                                 from 'angular2/router';
import {FORM_PROVIDERS, ControlGroup, Validators, FormBuilder}  from 'angular2/common';
import {HTTPTestService} from "../http/http-test.service";
import { CommonModule } from "@angular/common";

@Component({
  templateUrl:'../dev/contacts/newcontact.component.html',
  providers:[HTTPTestService],
  styles:[`
      .ng-invalid{
        border:1px solid red;
      }
      table {
        border-collapse: collapse;
      }
      table, th, td {
        border: 1px solid black;
      }
    `]
})
export class NewContactComponent{
  getData:string;
  updateBranchData:string;
  updatedName:string;
  updatedAddress:string;
  myForm: ControlGroup;
  getCopiesData:string;

  constructor(
    private _router : Router,
    private _formBuilder : FormBuilder,
    private _service:HTTPTestService
    )
  {
    //initialize newContact to empty object
    this.myForm = this._formBuilder.group({
      //This should match with Contact.ts object
      'id'          : [Math.floor((Math.random() * 100) + 1).toString()],
      'firstname'   : ['', Validators.required],
      'lastname'    : ['', Validators.required],
      'email'       : ['']
    });
     this.update();
  }

  update(){
    this.getData = this._service.getBranch;
    const timer = setTimeout(()=>{this.update();},50);
  }

  onGet(name:string){
    this._service.onGet(name);
    this.getData = this._service.getBranch;
  }

  onPutBranch(id:string){
    this.updatedName=prompt('Enter a new name');
    this.updatedAddress=prompt('Enter a new address');
    this._service.onPutBranch(id,this.updatedName,this.updatedAddress);
    this.updateBranchData = this._service.updateBranchData;
    const timer = setTimeout(()=>{this.onGet('branch');},50);

  }

  onGetCopiesBranch(bran:string,book:string){
    this._service.onGetCopiesBranch(bran,book);
    this.getCopiesData = this._service.getCopiesData;
    alert('Copies of book in branch: ' +this.getCopiesData)
  }

}
