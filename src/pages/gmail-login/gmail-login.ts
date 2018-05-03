import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,NavOptions } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import { HomePage } from '../home/home';
import { LoginStateProvider } from '../../providers/login-state/login-state';
import { RestProvider } from '../../providers/rest/rest';
import { LocalDatabaseProvider } from '../../providers/local-database/local-database';
/**
 * Generated class for the GmailLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gmail-login',
  templateUrl: 'gmail-login.html',
})
export class GmailLoginPage {
  log : any;
  userType : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private googlePlus: GooglePlus,private loginState: LoginStateProvider,public restAPI: RestProvider,
    public localDatabase: LocalDatabaseProvider) {
    
  }
  login(){
    this.googlePlus.login({
      'webClientId': '782403620225-5ao26r0dbjpn306e8njfhfepjehlvtu9.apps.googleusercontent.com'
    })
  .then(res => {
    this.loginState.displayName = res.displayName;
    this.loginState.email = res.email;
    this.loginState.imageUrl = res.imageUrl;
    this.loginState.loginState = true;
    this.loginState.userId = res.userId;
    this.loginState.userType = this.userType;
    this.localDatabase.login();
    //check account table & add
    var data = {
      username : res.userId,
      fullname : res.displayName,
      ImageURL : res.imageUrl,
      mail : res.email
    }
    this.restAPI.post('/account.php',data).then((resp)=>{
      console.log(resp);
    },(err)=>{
      console.log(err);
    });
    console.log(res);
    this.navCtrl.setRoot(HomePage);
  })
  .catch(err => {
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GmailLoginPage');
  }
}
