
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {ResultPage} from '../result/result';
declare function featureExtract(image);
declare function require(path: string): any;
//import * as cv from 'opencv';
/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {
  base64Image : string;
  resultPage : ResultPage;
  result : number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.base64Image = navParams.get('base64Image');
  }
  takePicture(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      //open image page
    },(err) =>{
      console.log(err);
    });
    
  }
  openAlbum(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      // open image page
    },(err) =>{
      console.log(err);
    });
  }
  process(){
    
    //feature extract
    featureExtract(this.base64Image);
    //set NN
    //set input
    //get result
    this.result =  5;
    //open result page
    
    this.navCtrl.push(ResultPage,{
      result : this.result,
      base64Image : this.base64Image
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }

}
