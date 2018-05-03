import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://info.rdi.ku.ac.th/meatX/api';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  post(path,data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+path,data,{
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded; charset=utf-8')
        .set('Accept-Charset','UTF-8')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  get(path,params?) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+path,{
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded; charset=utf-8')
        .set('Accept-Charset','UTF-8'),
        params : params
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        }); 
    });
  }
}
