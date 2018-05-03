import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

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
import { LoginStateProvider } from '../providers/login-state/login-state';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LocalDatabaseProvider } from '../providers/local-database/local-database';
import { Device } from '@ionic-native/device';
import { AboutPage } from '../pages/about/about';
import { AboutPageModule } from '../pages/about/about.module';
import { PicturePageModule } from '../pages/picture/picture.module';
import { ResultPageModule } from '../pages/result/result.module';
import { GmailLoginPageModule } from '../pages/gmail-login/gmail-login.module';
import { SyncResultPageModule } from '../pages/sync-result/sync-result.module';
import { PictureListPageModule } from '../pages/picture-list/picture-list.module';
import { PictureListPage } from '../pages/picture-list/picture-list';
import { SyncResultPage } from '../pages/sync-result/sync-result';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { PicturePreviewPageModule } from '../pages/picture-preview/picture-preview.module';
import { PicturePreviewPage } from '../pages/picture-preview/picture-preview';
import { CameraPreview } from '@ionic-native/camera-preview';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { ExamplePageModule } from '../pages/example/example.module';
import { ExamplePage } from '../pages/example/example';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    PicturePageModule,
    ResultPageModule,
    GmailLoginPageModule,
    AboutPageModule,
    PictureListPageModule,
    SyncResultPageModule,
    PicturePreviewPageModule,
    ExamplePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PicturePage,
    ResultPage,
    GmailLoginPage,
    AboutPage,
    PictureListPage,
    SyncResultPage,
    PicturePreviewPage,
    ExamplePage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginStateProvider,
    UniqueDeviceID,
    Geolocation,
    RestProvider,
    AlertController,
    LocalDatabaseProvider,
    Device,
    InAppBrowser,
    CameraPreview,
    Base64ToGallery
  ]
})
export class AppModule {}
