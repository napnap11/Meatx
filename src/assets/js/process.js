function featureExtract(image){
    let src = cv.imread(image);
    let dst = new cv.Mat();
    cv.cvtColor(src,dst,cv.COLOR_RGB2GRAY,0);
}