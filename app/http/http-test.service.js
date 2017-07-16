System.register(["angular2/core","angular2/http","rxjs/add/operator/map","rxjs/Rx"],function(t,n){"use strict";var o,e,r,s,i=(n&&n.id,this&&this.__decorate||function(t,n,o,e){var r,s=arguments.length,i=s<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,o,e);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(s<3?r(i):s>3?r(n,o,i):r(n,o))||i);return s>3&&i&&Object.defineProperty(n,o,i),i}),a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};return{setters:[function(t){o=t},function(t){e=t,r=t},function(t){},function(t){}],execute:function(){s=function(){function t(t){this._http=t}return t.prototype.getUser=function(t){switch(t){case"author":return this._http.get("http://52.207.230.195:8081/admin/Authors").map(function(t){return t.json()});case"book":return this._http.get("http://localhost:8081/admin/Books").map(function(t){return t.json()});case"branch":return this._http.get("http://localhost:8081/librarian/librariansMenu").map(function(t){return t.json()})}},t.prototype.onGet=function(t){var n=this;switch(t){case"author":console.log("Getting user now."),this.getUser(t).subscribe(function(t){return n.getData=t},function(t){return alert(t)},function(){return console.log("Finished Get")});break;case"book":console.log("Getting books now."),this.getUser(t).subscribe(function(t){return n.getBook=t},function(t){return alert(t)},function(){return console.log("Finished Get")});break;case"branch":console.log("Getting branches now."),this.getUser(t).subscribe(function(t){return n.getBranch=t},function(t){return alert(t)},function(){return console.log("Finished Get")})}},t.prototype.onGetCopiesBranch=function(t,n){var o=this;console.log("Getting user now."),this.getCopies(t,n).subscribe(function(t){return o.getCopiesData=t},function(t){return alert(t)},function(){return console.log("Finished Get")})},t.prototype.getCopies=function(t,n){return this._http.get("http://localhost:8081/librarian/viewCopyOfBook?branchId="+t+"&bookId="+n).map(function(t){return t.json()})},t.prototype.onPost=function(t){var n=this;this.postJson(t).subscribe(function(t){return n.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished Post")})},t.prototype.onPostBook=function(t){var n=this;this.postJsonBook(t).subscribe(function(t){return n.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished Post")})},t.prototype.onDelete=function(t){var n=this;this.deleteJson(t).subscribe(function(t){return n.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished delete")})},t.prototype.onDeleteBook=function(t){var n=this;this.deleteJsonBook(t).subscribe(function(t){return n.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished delete")})},t.prototype.onPut=function(t,n){var o=this;this.putJson(t,n).subscribe(function(t){return o.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished Post")})},t.prototype.onPutBook=function(t,n){var o=this;this.putJsonBook(t,n).subscribe(function(t){return o.postData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished Post")})},t.prototype.onPutBranch=function(t,n,o){var e=this;this.putJsonBranch(t,n,o).subscribe(function(t){return e.updateBranchData=JSON.stringify(t)},function(t){return alert(t)},function(){return console.log("Finished Post")})},t.prototype.postJson=function(t){var n=JSON.stringify({authorName:t});console.log(n);var o=n,e=new r.Headers;return e.append("Content-type","application/json"),this._http.post("http://localhost:8081/admin/addAuthor",o,{headers:e}).map(function(t){return t.json()})},t.prototype.postJsonBook=function(t){var n=JSON.stringify({title:t});console.log(n);var o=n,e=new r.Headers;return e.append("Content-type","application/json"),this._http.post("http://localhost:8081/admin/Books",o,{headers:e}).map(function(t){return t.json()})},t.prototype.deleteJson=function(t){var n=JSON.stringify({authorId:t});console.log(n);var o=new r.Headers;return o.append("Content-type","application/json"),this._http["delete"]("http://localhost:8081/admin/Authors?authorId="+t,{headers:o}).map(function(t){return t.json()})},t.prototype.deleteJsonBook=function(t){var n=JSON.stringify({authorId:t});console.log(n);var o=new r.Headers;return o.append("Content-type","application/json"),this._http["delete"]("http://localhost:8081/admin/Books/"+t,{headers:o}).map(function(t){return t.json()})},t.prototype.putJson=function(t,n){var o=JSON.stringify({authorId:t,authorName:n});console.log(o);var e=o,s=new r.Headers;return s.append("Content-type","application/json"),this._http.put("http://localhost:8081/Authors",e,{headers:s}).map(function(t){return t.json()})},t.prototype.putJsonBook=function(t,n){var o=JSON.stringify({bookId:t,title:n});console.log(o);var e=o,s=new r.Headers;return s.append("Content-type","application/json"),this._http.put("http://localhost:8081/admin/Books",e,{headers:s}).map(function(t){return t.json()})},t.prototype.putJsonBranch=function(t,n,o){var e=JSON.stringify({branchId:t,branchName:n,branchAddress:o});console.log(e);var s=e,i=new r.Headers;return i.append("Content-type","application/json"),this._http.put("http://localhost:8081/librarian/updateBranch",s,{headers:i}).map(function(t){return t.json()})},t=i([o.Injectable(),a("design:paramtypes",[e.Http])],t)}(),t("HTTPTestService",s)}}});