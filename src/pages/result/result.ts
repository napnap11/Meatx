import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Ionic2RatingModule} from 'ionic2-rating';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  result: any;
  grade: number;
  base64Image: string;
  rating : string="";
  percentRed : string;
  numS : string;
  numM : string;
  numL : string;
  avgS : string;
  avgM : string;
  avgL : string;
  avgAll : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alert : AlertController,private sanitizer:DomSanitizer) {
    this.result = navParams.get('result');
    this.base64Image = navParams.get('base64Image');
    console.log(this.result);
    this.grade = this.result.value;
    this.numS = this.result.numSmall;
    this.numM = this.result.numMedium;
    this.numL = this.result.numLarge;
    this.avgS = parseFloat(this.result.avgDistS).toFixed(2);
    this.avgM = parseFloat(this.result.avgDistM).toFixed(2);
    this.avgL = parseFloat(this.result.avgDistL).toFixed(2);
    this.avgAll = parseFloat(this.result.avgDistAll).toFixed(2);
    this.percentRed = parseFloat(this.result.percentRedArea).toFixed(2);
    if(this.grade==0 || this.grade == null){
      this.rating = "<span>No Rating</span>";
      if(this.numS == null) this.numS = "0";
      if(this.numM == null) this.numM = "0";
      if(this.numL == null) this.numL = "0";
      if(this.avgS == null) this.avgS = "0";
      if(this.avgM == null) this.avgM ="0";
      if(this.avgL == null) this.avgL = "0";
      if(this.avgAll == null) this.avgAll ="0";
      if(this.percentRed == null) this.percentRed = "0";
    }
    for(let i =0;i<this.grade;i++){
      this.rating += "<span class=\"fa fa-star checked\" style=\"color: orange\"\"></span>";
    }
  }
  ionViewWillEnter(){
    let html: string ="<ion-row><ion-col text-center>"+this.rating+"</ion-col></ion-row>";
    let safeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    document.getElementById("rating-box").innerHTML = this.rating;
    var alert = this.alert.create({
      title : 'ประมวลผลสำเร็จ',
      message : html
    }).present();
  }
  backHome(){
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
