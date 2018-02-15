
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {ResultPage} from '../result/result';
import { BaseInput } from 'ionic-angular/util/base-input';

/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {
  base64Image : string;
  resultPage : ResultPage;
  result : number;
  labelMatrix : number[][];
  centoidX : number[];
  centoidY : number[];
  colorMap : ColorMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.base64Image = navParams.get('base64Image');
    this.centoidX = Array(0);
    this.centoidY = Array(0);
  }
  takePicture(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      //open image page
    },(err) =>{
      console.log(err);
    });
    
  }
  openAlbum(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      // open image page
    },(err) =>{
      console.log(err);
    });
  }
  process(){
    //feature extract
    let image = document.getElementById('image');
    this.colorMap = ImageToColorMapParser.parse(image);
    let height = this.colorMap.getHeight();
    let width = this.colorMap.getWidth();
    let Row = Array(height);
    for(let i =0;i<width;i++){
      Row[i] = Array(width);
    }
    this.labelMatrix = Row;
    // RGB2bw &  image threshold
    for(let i=0;i <height;i++){
      for(let j=0;j<width;j++){
        let r = (<RGBColor> this.colorMap.getPixel(i,j)).r;
        let g = (<RGBColor> this.colorMap.getPixel(i,j)).g;
        let b = (<RGBColor> this.colorMap.getPixel(i,j)).b;
        let color = 0.2989 * r + 0.5870 * g + 0.1140 * b;
        // // threshold 
        if(color>100){
          this.labelMatrix[i][j] = -1;
        }
        else{
          this.labelMatrix[i][j] = 0;
        }
      }
    }
    // // find contour
    //   //label connected Component && find Contoid
      let count = 1;
      let area = Array(0);
      for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
          if(this.labelMatrix[i][j]==-1){
            this.centoidX.push(0);
            this.centoidY.push(0);
            area.push(this.labelConnectedComponent(i,j,height,width,count));
            this.centoidX[count-1] /= area[count-1];
            this.centoidY[count-1] /= area[count-1];
            console.log(area[count-1]);
            count++;
            
          }
        }
      }
      //calculate statistic value
        // // number of contour in each size
        let numS =0,numM =0,numL=0;
        // // total area in each size
        let areaS =0,areaM =0,areaL =0;
        // // std in each size
        let sdSX =0,ex1SX=0,ex2SX=0,KSX=0;
        let sdSY =0,ex1SY=0,ex2SY=0,KSY=0;
        let sdMX =0,ex1MX=0,ex2MX=0,KMX=0;
        let sdMY =0,ex1MY=0,ex2MY=0,KMY=0;
        let sdLX =0,ex1LX=0,ex2LX=0,KLX=0;
        let sdLY =0,ex1LY=0,ex2LY=0,KLY=0;
        for(let i=0;i<count;i++){
          if(area[i]>=10 && area[i]<100){
            // numS++;
            // areaS += area[i];
            // if(numS==1){
            //   KSX=this.centoidX[i];
            //   KSY=this.centoidY[i];
            // }
            // ex1SX += this.centoidX[i]-KSX;
            // ex1SY += this.centoidY[i]-KSY;
            // ex2SX += (this.centoidY[i]-KSY)*(this.centoidY[i]-KSY);
          }
        //   else if(area[i]>=100 && area[i]<3000){
        //     numM++;
        //     areaM += area[i];
        //     if(numM==1){
        //       KMX=this.centoidX[i];
        //       KMY=this.centoidY[i];
        //     }
        //     ex1MX += this.centoidX[i]-KMX;
        //     ex1MY += this.centoidY[i]-KMY;
        //     ex2MX += (this.centoidY[i]-KMY)*(this.centoidY[i]-KMY);    
        //   }
        //   else if(area[i]>=3000 && area[i]<1000000){
        //     numL++;
        //     areaL += area[i];
        //     if(numL==1){
        //       KLX=this.centoidX[i];
        //       KLY=this.centoidY[i];
        //     }
        //     ex1LX += this.centoidX[i]-KLX;
        //     ex1LY += this.centoidY[i]-KLY;
        //     ex2LX += (this.centoidY[i]-KLY)*(this.centoidY[i]-KLY);    
        //   }
        }
        // sdSX = Math.sqrt((ex2SX-ex1SX*ex1SX/numS)/(numS-1));
        // sdSY = Math.sqrt((ex2SY-ex1SY*ex1SY/numS)/(numS-1));
        // sdMX = Math.sqrt((ex2MX-ex1MX*ex1MX/numM)/(numM-1));
        // sdMY = Math.sqrt((ex2MY-ex1MY*ex1MY/numM)/(numM-1));
        // sdLX = Math.sqrt((ex2LX-ex1LX*ex1LX/numL)/(numL-1));
        // sdLY = Math.sqrt((ex2LY-ex1LY*ex1LY/numL)/(numL-1));
    //set NN
    //set input
    //get result
    this.result =  5;
    //open result page
    
    this.navCtrl.push(ResultPage,{
      result : this.result,
      base64Image : this.base64Image
    });
  }
  labelConnectedComponent(i:number,j:number,height:number,width:number,label:number): number
  {
    if(i<0 || j<0 || i>=height || j>=width) return 0;
    if(this.labelMatrix[i][j]!=-1) return 0;
    else{
      this.labelMatrix[i][j]=label;
      let count = 1;
      this.centoidX[label-1] += i;
      this.centoidY[label-1] += j;
      for(let k=-1;k<2;k++){
        for(let l=-1;l<2;l++){
          if(this.labelMatrix[i][j]==-1)
          count += this.labelConnectedComponent(i+k,j+l,height,width,label);
        }
      }
      return count;
    }    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }

}
