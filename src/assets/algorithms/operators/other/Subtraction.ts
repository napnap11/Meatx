
class Subtraction
{
  constructor()
  {

  }

  public convolute(colorMaps : Array<ColorMap>) : ColorMap
  {
    let minuend = colorMaps.shift();
    let subtrahend = (new Addition()).convolute(colorMaps);
    
    let result = new ColorMap(minuend.getWidth(), minuend.getHeight());

    for(let x=0; x<minuend.getWidth(); x++)
    {
      for(let y=0; y<minuend.getHeight(); y++)
      {
        let minuendPixel = minuend.getPixel(x, y);
        let subtrahendPixel = subtrahend.getPixel(x, y);
        result.setPixel(x, y, minuendPixel.subtract(subtrahendPixel));
      }
    }

    return result;
  }
}
