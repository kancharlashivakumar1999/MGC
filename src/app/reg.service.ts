import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  isUser:any;
  logdata:any;
  httpOption={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) {

   }
   log(username:any,password:any)
   {
    return this.http.get(`https://localhost:44390/api/Marks/log/${username}/${password}`).subscribe((data:any)=>{this.isUser=data; })
   }
   get(Id:any)
   {
    return this.http.get(`https://localhost:44390/api/Marks/get/${Id}`)
   }
   List()
   {
    return this.http.get(`https://localhost:44390/api/Marks/gl`)
   }
   Adminlog(user:any,id:any)
   {
    return this.http.get(`https://localhost:44390/api/Admin/get/${user}/${id}`).subscribe((l:any)=>{this.logdata=l; })
   }
   userDeatils()
   {
    return this.http.get(`https://localhost:44390/api/Marks/users`)
   }
  
   Add(ID:any)
   {
    return this.http.post(`https://localhost:44390/api/Marks/insert/`,ID,this.httpOption).subscribe();
   }

   AddMarks(ID:any)
   {
    return this.http.post(`https://localhost:44390/api/Marks/insertMarks/`,ID,this.httpOption).subscribe();
   }

   feeID(ID:any)
   {
      return this.http.get(`https://localhost:44390/api/Admin/fee/${ID}`)
   }
}
