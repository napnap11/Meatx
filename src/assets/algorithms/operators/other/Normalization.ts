

class Normalization implements Filter
{
  constructor()
  {

  }

  convolute(sourceColorMap : ColorMap) : ColorMap
  {
    let minR = 9999;
    let minG = 9999;
    let minB = 9999;

    let maxR = -9999;
    let maxG = -9999;
    let maxB = -9999;

    for(let x=0; x<sourceColorMap.getWidth(); x++)
    {
      for(let y=0; y<sourceColorMap.getHeight(); y++)
      {
        let sourcePixel : RGBColor = (<RGBColor>sourceColorMap.getPixel(x, y));

        if(sourcePixel.r < minR) minR = sourcePixel.r;
        if(sourcePixel.g < minG) minG = sourcePixel.g;
        if(sourcePixel.b < minB) minB = sourcePixel.b;

        if(sourcePixel.r > maxR) maxR = sourcePixel.r;
        if(sourcePixel.g > maxG) maxG = sourcePixel.g;
        if(sourcePixel.b > maxB) maxB = sourcePixel.b;
      }
    }


    let resultColorMap = new ColorMap(sourceColorMap.getWidth(), sourceColorMap.getHeight());

    for(let x=0; x<sourceColorMap.getWidth(); x++)
    {
      for(let y=0; y<sourceColorMap.getHeight(); y++)
      {
        let sourcePixel : RGBColor = (<RGBColor>sourceColorMap.getPixel(x, y));

        let r = (sourcePixel.r - minR) / (maxR - minR) * 255;
        let g = (sourcePixel.g - minG) / (maxG - minG) * 255;
        let b = (sourcePixel.b - minB) / (maxB - minB) * 255;

        resultColorMap.setPixel(x, y, new RGBColor(r, g, b));
      }
    }

    return resultColorMap;
  }
}
