import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {HTTPTestService} from "../http/http-test.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "contact-list",
  templateUrl: "../dev/contacts/contact-list.component.html",
  directives: [],
  providers:[HTTPTestService],
  styleUrls:["../src/css/app.css"]
})
export class ContactListComponent{
  getData:string;
  getBook:string;
  postData:string;
  putData:string;
  deleteData:string;
  authName:string;
  updatedName:string;
  bookTitle:string;

  info = ["1","2","2","4"];

  public selectedContact = null;

  public onNameClick(contact){
        this.selectedContact = contact;
  }

  constructor(private _service:HTTPTestService){
      this.update();
      this.updateBook();
  }
  update(){
    this.getData = this._service.getData;
    const timer = setTimeout(()=>{this.update();},50);
  }

  updateBook(){
    this.getBook = this._service.getBook;
    const timer = setTimeout(()=>{this.updateBook();},50);
  }  
  
  onGet(a:string){
    this._service.onGet(a);
    switch(a){
      case "author":
      this.getData = this._service.getData;
      break;
      case "book":
      this.getBook = this._service.getBook;
      break;
    }
  }

  onPost(name:string){ 
      this._service.onPost(name);
      this.postData = "Added Author!";
      const timer = setTimeout(()=>{this.onGet('author');},50);
  }

  onPostBook(name:string){
      this._service.onPostBook(name);
      this.postData = "Added book!";
      const timerr = setTimeout(()=>{this.onGet('book');},50);
  }

  onPut(id:string){
        this.updatedName=prompt('Enter a new name');
        this._service.onPut(id,this.updatedName);
        this.putData = this._service.postData;
        const timer = setTimeout(()=>{this.onGet('author');},50);
      }

  onPutBook(id:string){
        this.updatedName=prompt('Enter a new title');
        this._service.onPutBook(id,this.updatedName);
        this.putData = this._service.postData;
        const timer = setTimeout(()=>{this.onGet('book');},50);
  }  

  onDelete(id:string){
      this._service.onDelete(id);
      this.deleteData = this._service.postData;
      const timer = setTimeout(()=>{this.onGet('author');},50);
  }
  onDeleteBook(id:string){
      this._service.onDeleteBook(id);
      this.deleteData = this._service.postData;
      const timer = setTimeout(()=>{this.onGet('book');},50);
  }  
}
