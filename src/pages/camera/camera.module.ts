import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import {Camera, CameraOptions} from '@ionic-native/camera';
@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  providers:[
    Camera
  ]
})
export class CameraPageModule {}
