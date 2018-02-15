import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {
    this.login();
  }
  login(){
    this.googlePlus.login({
      'webClientId': '782403620225-5ao26r0dbjpn306e8njfhfepjehlvtu9.apps.googleusercontent.com',
      'offline': true
    })
  .then(res => {
    alert(res);
  })
  .catch(err => {
    alert(err);
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GmailLoginPage');
  }

}
