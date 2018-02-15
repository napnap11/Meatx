import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera,CameraOptions} from '@ionic-native/camera';
import { PicturePage } from '../pages/picture/picture';
import { ResultPage } from '../pages/result/result';
import { GmailLoginPage } from '../pages/gmail-login/gmail-login';
import {Ionic2RatingModule} from 'ionic2-rating';
import { GooglePlus } from '@ionic-native/google-plus';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PicturePage,
    ResultPage,
    GmailLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PicturePage,
    ResultPage,
    GmailLoginPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
