import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions} from '@ionic-native/camera-preview';
import { PicturePage } from '../picture/picture';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
/**
 * Generated class for the PicturePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture-preview',
  templateUrl: 'picture-preview.html',
})
export class PicturePreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cameraPreview: CameraPreview, public b64ToGallery: Base64ToGallery) {
  }
  ionViewWillLeave(){
    this.cameraPreview.hide().then((res)=>{
      console.log(res);
      this.cameraPreview.stopCamera().then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    },(err)=>{
      console.log(err);
      this.cameraPreview.stopCamera().then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    });
    /* 
    
    */
  }
  ionViewDidEnter() {
    const cameraOptions: CameraPreviewOptions ={
      camera : 'rear',
      tapToFocus : true,
      toBack : true,
      width : window.screen.width,
      height : window.screen.height-80,
      x : 0,
      y : 50,
    }
    this.cameraPreview.startCamera(cameraOptions).then((res)=>{
      console.log(res);
      this.cameraPreview.show().then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    },(err)=>{
      console.log(err);
      this.cameraPreview.show().then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    });
  }
  takePicture(){
    this.cameraPreview.takePicture({
      quality : 100,
      height : 3000,
      width : 3000,
    }).then((imageData:string)=>{
      var base64Image = "data:image/jpeg;base64,"+imageData;
      var saveImage = "data:image/png;base64,"+imageData;
      this.b64ToGallery.base64ToGallery(saveImage).then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
      //open image page
      this.navCtrl.push(PicturePage,{
        base64Image: base64Image,
        meatID : '',
        grade : -1,
        note : '',
        id : -1,
        index : -1,
        sync : false
      });
    },(err) =>{
      console.log(err);
    });
  }
}
