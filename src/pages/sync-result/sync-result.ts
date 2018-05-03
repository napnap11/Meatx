import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LocalDatabaseProvider } from '../../providers/local-database/local-database';
import { PicturePage } from '../picture/picture';

/**
 * Generated class for the SyncResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sync-result',
  templateUrl: 'sync-result.html',
})
export class SyncResultPage {
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public localDatabase: LocalDatabaseProvider) {
    
    }

    ionViewWillEnter() {
      this.localDatabase.loadPicture().then((data)=>{
        console.log(data);
        this.data = data;
      });
    }
  editPicture(id){
    this.localDatabase.editLoadPicture(id).then((data:any)=>{
      this.navCtrl.push(PicturePage,{
        base64Image: data.base64Image,
        meatID : data.meatID,
        grade : data.grade,
        note : data.note,
        id : data.id,
        index : data.index,
        sync : data.sync
      });
    });
  }
  deletePicture(id){
    this.localDatabase.deletePicture((id)).then(()=>{
      
    });
    this.localDatabase.loadPicture().then((data)=>{
      console.log(data);
      this.data = data;
    });
  }
}
