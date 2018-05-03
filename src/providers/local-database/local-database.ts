
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../rest/rest';
import { LoginStateProvider } from '../login-state/login-state';

/*
  Generated class for the LocalDatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDatabaseProvider {
  length: number;
  data: any;
  syncNumber: number;
  constructor(public storage: Storage, public restAPI: RestProvider, public loginState: LoginStateProvider) {
    this.storage.get('length').then((length) => {
      if (length < 0) length = 0;
      this.length = length;
    }, (err) => {
      this.length = 0;
      console.log(err);
    });
    this.storage.get('syncNumber').then((length) => {
      this.syncNumber = length;
    }, (err) => {
      this.syncNumber = 0;
      console.log(err);
    });
  }

  savePicture(data) {
    this.storage.get('length').then((length) => {
      if (length < 0) length = 0;
      length = length + 1;
      data.index = length;
      this.storage.set(data.index.toString(), data);
      this.storage.set('length', length);
    }, (err) => {
      this.length = 1;
      data.index = this.length;
      this.storage.set(data.index.toString(), data);
      this.storage.set('length', this.length);
    });
  }
  editLoadPicture(index) {
    return new Promise((resolve, reject) => {
      this.storage.get(index.toString()).then((data) => {
        var resp = {
          base64Image: data.imageContent,
          meatID: data.meatID,
          grade: data.grade,
          note: data.note,
          id: data.id,
          index: data.index,
          sync : data.sync
        }
        if (data.id > 0) {
          resp.base64Image = 'https://madlab.cpe.ku.ac.th/MeatX/tmp/phpcache/' + data.imageContent + '.t.jpg';
        }resolve(resp);
      }, (err) => {
        reject(err);
      });
    });
  }
  editSavePicture(index, data) {
    if (data.sync == true) {
      
      this.storage.get('syncNumber').then((syncNumber) => {
        syncNumber = syncNumber - 1;
        if (syncNumber < 0) syncNumber = 0;
        this.storage.set('syncNumber', syncNumber);
      });
    }
    data.sync = false;
    console.log(data);
    this.storage.set(index.toString(), data);
  }

  deletePicture(index) {
    return new Promise((resolve, reject) => {
      this.storage.get(index.toString()).then((data) => {
        if (data.sync == true) {
          data.sync = false;
          this.storage.get('syncNumber').then((syncNumber) => {
            syncNumber = syncNumber - 1;
            if (syncNumber < 0) syncNumber = 0;
            this.storage.set('syncNumber', syncNumber);
          });
        }
        data.deleted = 'Y';
        this.storage.set(index.toString(), data);
        resolve();
      });
    });
  }
  loadPicture() {
    return new Promise((resolve, reject) => {
      this.storage.get('length').then((length) => {
        if (length < 0) length = 0;
        this.length = length;
        console.log(length);
        var resp = Array(0);
        var count = 0;
        for (let i = length; i >= 1; i--) {
          this.storage.get(i.toString()).then((data) => {
            if (data.email == this.loginState.email && data.deleted == 'N') {
              let status: string
              if (data.sync == false) {
                status = "ยังไม่ได้ sync";
              }
              else {
                status = "sync แล้ว";
              }
              var result = {
                meatID: data.meatID,
                base64Image: data.imageContent,
                pictureTime: data.pictureTime,
                note: data.note,
                grade: data.grade,
                status: status,
                id: data.id,
                index: data.index
              }
              if (data.id > 0) {
                result.base64Image = 'https://madlab.cpe.ku.ac.th/MeatX/cache/img/'+this.loginState.email+'/'+data.imageContent +'.t.jpg';
              }
              resp.push(result);

              console.log(data);
            }
          });
        }
        console.log(resp);
        resolve(resp);
      }), (err) => {
        reject(err);
      }
    });
  }
  get(itemName: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(itemName).then((item) => {
        resolve(item);
      }, (err) => {
        reject(err);
      });
    });
  }

  login() {
    this.storage.set('displayName', this.loginState.displayName);
    this.storage.set('email', this.loginState.email);
    this.storage.set('imageUrl', this.loginState.imageUrl);
    this.storage.set('userId',this.loginState.userId);
    this.storage.set('loginState', true);
    this.storage.set('userType',this.loginState.userType);
  }
  logout() {
    this.storage.set('displayName', '');
    this.storage.set('email', '');
    this.storage.set('imageUrl', '');
    this.storage.set('loginState', false);
    this.storage.set('userType','normal');
  }
  sync() {
    return new Promise((resolve, reject) => {
      //to server
      this.storage.get('length').then((length) => {
        console.log('test1');
        this.length = length;
        this.storage.get('syncNumber').then((syncNumber) => {
          console.log('test2');
          this.syncNumber = syncNumber;
        }, (err) => {
          console.log('test3');
          this.syncNumber = 0;
        });
        for(let i = 1; i <= length; i++) {
          this.storage.get(i.toString()).then((data) => {
            console.log('test4');
            if (data.sync == false) {
              data.sync = true;
              this.storage.set(data.index.toString(), data);
              if (data.id == -1) {
                this.restAPI.post('/sendImage.php', data).then((res) => {
                  console.log(res);
                  data.sync = true;
                  this.storage.set(data.index.toString(), data);
                  if (i == length) {
                    this.restAPI.get('/getData.php', {
                      email: this.loginState.email
                    }).then((resp: [{
                      meatID: any, grade: any, pictureTime: any, id: any, note: any
                        , deleted: any,email:any,index:any,hash:any
                    }]) => {
                      for (let i = 0; i < resp.length; i++) {
                        let data = {
                          imageContent: resp[i].hash,
                          meatID: resp[i].meatID,
                          grade: resp[i].grade,
                          note: resp[i].note,
                          id: resp[i].id,
                          index: (i + 1),
                          deleted: resp[i].deleted,
                          sync: true,
                          email : resp[i].email,
                          pictureTime : resp[i].pictureTime
                        }
                        resp[i].index = (i+1);
                        this.storage.set(data.index.toString(), data);
                      }
                      this.storage.set('length', resp.length);
                      this.storage.set('syncNumber', resp.length);
                      resolve(resp);
                    }, (err) => {
                      console.log('test5');
                    });
                  }
                }, (err) => {
                  console.log('test6');
                  reject(err);
                });
              }
              else if(data.deleted=='Y') {
                console.log('test7');
                this.restAPI.post('/deleteImage.php', data).then((res) => {
                  console.log(res);
                  data.sync = true;
                  this.storage.set(data.index.toString(), data);
                  if (i == length) {
                    this.restAPI.get('/getData.php', {
                      email: this.loginState.email
                    }).then((resp: [{
                      meatID: any, grade: any, pictureTime: any, id: any, note: any
                        , deleted: any,email:any,index:any,hash:any
                    }]) => {
                      for (let i = 0; i < resp.length; i++) {
                        let data = {
                          imageContent: resp[i].hash,
                          meatID: resp[i].meatID,
                          grade: resp[i].grade,
                          note: resp[i].note,
                          id: resp[i].id,
                          index: (i + 1),
                          deleted: resp[i].deleted,
                          sync: true,
                          email : resp[i].email,
                          pictureTime : resp[i].pictureTime
                        }
                        resp[i].index = (i+1);
                        this.storage.set(data.index.toString(), data);
                      }
                      this.storage.set('length', resp.length);
                      this.storage.set('syncNumber', resp.length);
                      resolve(resp);
                    }, (err) => {
                      console.log('test8');
                    });
                  }
                }, (err) => {
                  console.log('test9');
                  reject(err);
                });
              }
              else{
                console.log('test7');
                this.restAPI.post('/editImage.php', data).then((res) => {
                  console.log(res);
                  data.sync = true;
                  this.storage.set(data.index.toString(), data);
                  if (i == length) {
                    this.restAPI.get('/getData.php', {
                      email: this.loginState.email
                    }).then((resp: [{
                      meatID: any, grade: any, pictureTime: any, id: any, note: any
                        , deleted: any,email:any,index:any,hash:any
                    }]) => {
                      for (let i = 0; i < resp.length; i++) {
                        let data = {
                          imageContent: resp[i].hash,
                          meatID: resp[i].meatID,
                          grade: resp[i].grade,
                          note: resp[i].note,
                          id: resp[i].id,
                          index: (i + 1),
                          deleted: resp[i].deleted,
                          sync: true,
                          email : resp[i].email,
                          pictureTime : resp[i].pictureTime
                        }
                        resp[i].index = (i+1);
                        this.storage.set(data.index.toString(), data);
                      }
                      this.storage.set('length', resp.length);
                      this.storage.set('syncNumber', resp.length);
                      resolve(resp);
                    }, (err) => {
                      console.log('test8');
                    });
                  }
                }, (err) => {
                  console.log('test9');
                  reject(err);
                });
              }
            }
            else if(i==length){
              this.restAPI.get('/getData.php', {
                email: this.loginState.email
              }).then((resp: [{
                meatID: any, grade: any, pictureTime: any, id: any, note: any
                              , deleted: any,email:any,index:any,hash:any
                          }]) => {
                            for (let i = 0; i < resp.length; i++) {
                              let data = {
                                imageContent: resp[i].hash,
                                meatID: resp[i].meatID,
                                grade: resp[i].grade,
                                note: resp[i].note,
                                id: resp[i].id,
                                index: (i + 1),
                                deleted: resp[i].deleted,
                                sync: true,
                                email : resp[i].email,
                                pictureTime : resp[i].pictureTime
                              }
                              resp[i].index = (i+1);
                              this.storage.set(data.index.toString(), data);
                }
                this.storage.set('length', resp.length);
                this.storage.set('syncNumber', resp.length);
                resolve(resp);
                });
            }
          });
        }
        //from server
      }, (err) => {
        console.log('test10');
        this.restAPI.get('/getData.php', {
          email: this.loginState.email
        }).then((resp: [{
          meatID: any, grade: any, pictureTime: any, id: any, note: any
                        , deleted: any,email:any,index:any,hash:any
                    }]) => {
                      for (let i = 0; i < resp.length; i++) {
                        let data = {
                          imageContent: resp[i].hash,
                          meatID: resp[i].meatID,
                          grade: resp[i].grade,
                          note: resp[i].note,
                          id: resp[i].id,
                          index: (i + 1),
                          deleted: resp[i].deleted,
                          sync: true,
                          email : resp[i].email,
                          pictureTime : resp[i].pictureTime
                        }
                        resp[i].index = (i+1);
                        this.storage.set(data.index.toString(), data);
          }
          this.storage.set('length', resp.length);
          this.storage.set('syncNumber', resp.length);
          reject(err);
          });
      });

    });
  }
}
