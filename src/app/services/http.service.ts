import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string="http://localhost:3000/";
  httpHeaders:HttpHeaders=new HttpHeaders({
  'content-type':'application/json'
  })
  constructor(private http:HttpClient) {}
 
  postDataToServer(endPoint:string,body:any){
    console.log("body",body)
    const Url=this.baseUrl+endPoint
    return this.http.post(Url,body,{headers:this.httpHeaders})
 }
 getDataToServer(endPoint:string){
  const Url =this.baseUrl+endPoint;
  return this.http.get(Url,{headers:this.httpHeaders})
 }
 putDataToServer(endPoint:string,body:any){
  const Url =this.baseUrl+endPoint;
  return this.http.put(Url,body,{headers:this.httpHeaders})
 }
 deleteDataToServer(endPoint:string){
  const Url =this.baseUrl+endPoint;
  return this.http.delete(Url,{headers:this.httpHeaders})
 }
}
