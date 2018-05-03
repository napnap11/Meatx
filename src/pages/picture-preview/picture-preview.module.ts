import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PicturePreviewPage } from './picture-preview';

@NgModule({
  declarations: [
    PicturePreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PicturePreviewPage),
  ],
})
export class PicturePreviewPageModule {}
