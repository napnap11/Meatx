import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PicturePage } from '../pages/picture/picture';
import { ResultPage} from '../pages/result/result';
import { GmailLoginPage} from '../pages/gmail-login/gmail-login';
import { LoginStateProvider } from '../providers/login-state/login-state';
import { AboutPage } from '../pages/about/about';
import { PictureListPage } from '../pages/picture-list/picture-list';
import { GooglePlus } from '@ionic-native/google-plus';
import { LocalDatabaseProvider } from '../providers/local-database/local-database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,public loginState: LoginStateProvider,
    public googlePlus : GooglePlus,public localDatabase: LocalDatabaseProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก', component: HomePage },
      { title: 'รายการภาพถ่าย', component: PictureListPage},
      { title: 'เกี่ยวกับเรา', component: AboutPage },
    ];
  }
  logout(){
    this.loginState.loginState = false;
    this.localDatabase.logout();
    this.googlePlus.disconnect().then(()=>{
      this.nav.setRoot(GmailLoginPage);
      },(err)=>{
        this.nav.setRoot(GmailLoginPage);
      });
    
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
