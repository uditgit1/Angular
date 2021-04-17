import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestoService {
 appurl="http://localhost:3000/Restorent"
  constructor(private http: HttpClient) { }

  getList() { 
   return this.http.get(this.appurl)
      }

      saveResto(data){

   return this.http.post(this.appurl,data)

      }

      // deleteResto(id){

      //    return this.http.post(this.appurl,data)
      
      //       }



}
