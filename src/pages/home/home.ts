import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  takePicture(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
    },(err) =>{
      console.log(err);
    });
  }
}
