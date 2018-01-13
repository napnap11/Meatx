import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions, MediaType} from '@ionic-native/camera';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'camera-page',
  segment: 'camera'
})
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public base64Image: string;
  constructor(private camera: Camera) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
  
}
