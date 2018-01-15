import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Ionic2RatingModule} from 'ionic2-rating';
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
  result: number;
  base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = navParams.get('result');
    this.base64Image = navParams.get('base64Image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
