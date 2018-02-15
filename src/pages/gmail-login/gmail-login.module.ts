import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GmailLoginPage } from './gmail-login';

@NgModule({
  declarations: [
    GmailLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(GmailLoginPage),
  ],
})
export class GmailLoginPageModule {}
