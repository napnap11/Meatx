import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {PicturePage} from '../picture/picture';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image: string;
  picturePage: PicturePage;
  constructor(public navCtrl: NavController, private camera: Camera) {

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
      this.navCtrl.push(PicturePage,{
        base64Image: this.base64Image
      });
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
      //open image page
      this.navCtrl.push(PicturePage,{
        base64Image: this.base64Image
      });
    },(err) =>{
      console.log(err);
    });
  }
}
