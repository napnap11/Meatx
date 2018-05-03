import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PicturePreviewPage } from '../picture-preview/picture-preview';
import { LocalDatabaseProvider } from '../../providers/local-database/local-database';

/**
 * Generated class for the ExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-example',
  templateUrl: 'example.html',
})
export class ExamplePage {
  noExample : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public localDatabase: LocalDatabaseProvider) {
  }
  next(){
    if(this.noExample){
      this.localDatabase.storage.set('example',false);
    }
    this.navCtrl.push(PicturePreviewPage);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamplePage');
  }
  ionViewWillEnter(){
    this.localDatabase.get('example').then((res)=>{
      if(res==false) this.navCtrl.popToRoot().then(()=>{
        this.navCtrl.push(PicturePreviewPage);
      });
      else{

      }
    },(err)=>{

    })
  }
}
