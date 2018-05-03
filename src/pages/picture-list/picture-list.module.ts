import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureListPage } from './picture-list';

@NgModule({
  declarations: [
    PictureListPage,
  ],
  imports: [
    IonicPageModule.forChild(PictureListPage),
  ],
})
export class PictureListPageModule {}
