import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  getData:string;
  getBook:string;
  getBranch:string;
  postData:string;
  deleteData:string;
  putdata:string;
  updateBranchData:string;
  getCopiesData:string;


  constructor(private _http:Http){}
    getUser(a:string){
      switch(a){
        case 'author':
        return this._http.get("http://34.204.137.254:8081/admin/Authors").map(res=>res.json());
        case 'book':
        return this._http.get("http://34.204.137.254:8081/admin/Books").map(res=>res.json());
        case 'branch':
        return this._http.get("http://34.204.137.254:8081/librarian/LibrariansMenu").map(res=>res.json());
      }
    };
    
    onGet(a:string){
      switch(a){
        case "author":
          console.log('Getting user now.');
          this.getUser(a).subscribe( 
          data =>this.getData = data,
          error=>alert(error),
          ()=>console.log('Finished Get')
          );
        break;
        case "book":
          console.log('Getting books now.');
          this.getUser(a).subscribe( 
          data =>this.getBook = data,
          error=>alert(error),
          ()=>console.log('Finished Get')
          );
        break;
        case "branch":
          console.log('Getting branches now.');
          this.getUser(a).subscribe( 
          data =>this.getBranch = data,
          error=>alert(error),
          ()=>console.log('Finished Get')
          );
        break;
      }

    }

  onGetCopiesBranch(bran:string,book:string){
    console.log('Getting user now.');
    this.getCopies(bran,book).subscribe( 
    data =>this.getCopiesData = data,
    error=>alert(error),
    ()=>console.log('Finished Get')
    ) 
  }

  getCopies(br:string,bo:string){
    return this._http.get("http://34.204.137.254:8081/librarian/viewCopyOfBook?branchId="+br+"&bookId="+bo).map(res=>res.json());
  }

  onPost(name:string){
          this.postJson(name).subscribe(
            data =>this.postData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished Post')
          );
  }
  onPostBook(name:string){
    this.postJsonBook(name).subscribe(
    data =>this.postData = JSON.stringify(data),
    error=>alert(error),
    ()=>console.log('Finished Post')
    );

  }  

  onDelete(id:string){
          this.deleteJson(id).subscribe(
            data =>this.postData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished delete')
          );
  } 

  onDeleteBook(id:string){
          this.deleteJsonBook(id).subscribe(
            data =>this.postData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished delete')
          );
  }  

   onPut(id:string,name:string){
          this.putJson(id,name).subscribe(
            data =>this.postData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished Post')
          );
  } 

   onPutBook(id:string,name:string){
          this.putJsonBook(id,name).subscribe(
            data =>this.postData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished Post')
          );
  }   

   onPutBranch(id:string,name:string,address:string){
          this.putJsonBranch(id,name,address).subscribe(
            data =>this.updateBranchData = JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finished Post')
          );
  }    

    postJson(name:string){
          var json = JSON.stringify({
            authorName: name
          });
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');

          return this._http.post("http://34.204.137.254:8081/admin/Authors",data, {
            headers:header
          })
          .map(res => res.json());               
    };

    postJsonBook(name:string){
          var json = JSON.stringify({
            title: name
          });
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');

          return this._http.post("http://34.204.137.254:8081/admin/Books",data, {
            headers:header
          })
          .map(res => res.json());             
    };    

    deleteJson(id:string){
          var json = JSON.stringify({
            authorId: id
          });
          var w = 90;
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');

          return this._http.delete("http://34.204.137.254:8081/admin/Authors/"+id, {
            headers:header
          })
          .map(res => res.json());                     
    };

    deleteJsonBook(id:string){
          var json = JSON.stringify({
            authorId: id
          });
          var w = 90;
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');
          return this._http.delete("http://34.204.137.254:8081/admin/Books/"+id, {
            headers:header
          })
          .map(res => res.json());                
    };    

     putJson(id:string,name:string){
          var json = JSON.stringify({
            authorId: id,
            authorName: name
          });
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');

          return this._http.put("http://34.204.137.254:8081/admin/Authors",data, {
            headers:header
          })
          .map(res => res.json());                  
    };

     putJsonBook(id:string,name:string){
          var json = JSON.stringify({
            bookId: id,
            title: name
          });
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');
          return this._http.put("http://34.204.137.254:8081/admin/Books",data, {
            headers:header
          })
          .map(res => res.json());           
    };    

     putJsonBranch(id:string,name:string,address:string){
          var json = JSON.stringify({
            branchId: id,
            branchName: name,
            branchAddress: address
          });
          console.log(json);
          var data = json;
          var header = new Headers();
          header.append('Content-type', 'application/json');
          return this._http.put("http://34.204.137.254:8081/librarian/Branches",data, {
            headers:header
          })
          .map(res => res.json());           
    };     
}
