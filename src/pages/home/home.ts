import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {PicturePage} from '../picture/picture';
import { LoginStateProvider } from '../../providers/login-state/login-state';
import { GmailLoginPage } from '../gmail-login/gmail-login';
import { LocalDatabaseProvider } from '../../providers/local-database/local-database';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { SyncResultPage } from '../sync-result/sync-result';
import { GooglePlus } from '@ionic-native/google-plus';
import { PictureListPage } from '../picture-list/picture-list';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PicturePreviewPage } from '../picture-preview/picture-preview';
import { ExamplePage } from '../example/example';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image: string;
  picturePage: PicturePage;
  syncString : string;
  en : boolean;
  constructor(public navCtrl: NavController, private camera: Camera,public loginState: LoginStateProvider
  ,public localDatabase:LocalDatabaseProvider,public alert: AlertController,public googlePlus: GooglePlus,
  public iab: InAppBrowser) {
    this.en = (loginState.userType=="en");
  }
  onEnter(){
    this.localDatabase.get('loginState').then((loginState:boolean)=>{
      this.loginState.loginState = loginState;
      this.googlePlus.trySilentLogin({
        'webClientId': '782403620225-5ao26r0dbjpn306e8njfhfepjehlvtu9.apps.googleusercontent.com'
      });
      console.log(loginState);
      if(this.loginState.loginState==true){
        this.localDatabase.get('displayName').then((displayName)=>{
          this.loginState.displayName = displayName;
        });
        this.localDatabase.get('email').then((email)=>{
          this.loginState.email = email;
        });
        this.localDatabase.get('imageUrl').then((imageUrl)=>{
          this.loginState.imageUrl = imageUrl;
        });
        this.localDatabase.get('userId').then((userId)=>{
          this.loginState.userId = userId;
        });
        this.localDatabase.get('syncNumber').then((syncNumber:number)=>{
          this.localDatabase.get('length').then((length:number)=>{
            if(syncNumber>=length){
              this.syncString = 'Sync เรียบร้อย';
              }
              else{
                this.syncString = 'ยังไม่ได้ Sync อีก '+(length-syncNumber)+' ภาพ';
              }
          });
        });
      }
      else{
        this.navCtrl.setRoot(GmailLoginPage);
      }
    },(err)=>{
      this.navCtrl.setRoot(GmailLoginPage);
    });
      
    
  }
  ionViewWillEnter(){
    this.onEnter();
  }
  openWebsite(){
    try{
    var browser = this.iab.create('https://madlab.cpe.ku.ac.th/MeatX/main.php?userId='+this.loginState.userId,'_system');
    browser.show();  
    }
    catch(err){
      window.open('https://madlab.cpe.ku.ac.th/MeatX/main.php?userId='+this.loginState.userId,'_blank');
    }
  }
  previewPicture(){
    this.localDatabase.get('example').then((res)=>{
      if(res==false) this.navCtrl.popToRoot().then(()=>{
        this.navCtrl.push(PicturePreviewPage);
      });
      else{
        this.navCtrl.push(ExamplePage);
      }
    },(err)=>{
      this.navCtrl.push(ExamplePage);
    })
  }
  takePicture(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum : true,
      quality : 100,
      targetHeight : 3000,
      targetWidth : 3000,
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      //open image page
      this.navCtrl.push(PicturePage,{
        base64Image: this.base64Image,
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
  sync(){
    
  this.localDatabase.get('syncNumber').then((syncNumber:number)=>{
    this.localDatabase.get('length').then((length:number)=>{
      var buttonString = '';
      if(syncNumber>=length){
        buttonString = 'Sync เรียบร้อย';
        }
        else{
          this.syncString = 'ยังไม่ได้ Sync อีก '+(length-syncNumber)+' ภาพ';
        }
        this.localDatabase.sync().then((data)=>{
          this.alert.create({
            title: 'Success',
            subTitle : 'Sync สำเร็จจำนวน '+(length-syncNumber)+' ภาพ',
            buttons : ['OK']
          }).present();
          this.navCtrl.push(PictureListPage);
        });
        
    });
  });
  }
  openAlbum(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality : 100,
      targetHeight : 3000,
      targetWidth : 3000,
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      //open image page
      this.navCtrl.push(PicturePage,{
        base64Image: this.base64Image,
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
