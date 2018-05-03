
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginStateProvider {
  loginState : boolean = false;
  displayName : any = '';
  imageUrl : any = '';
  email : any = '';
  userId : any='';
  userType : any = 'normal';
  example : boolean = true;
  constructor() {
  }

}
