
class Inversion
{
  constructor()
  {

  }

  convolute(sourceColorMap : ColorMap) : ColorMap
  {
    let sourceWidth = sourceColorMap.getWidth();
    let sourceHeight = sourceColorMap.getHeight();
    let resultColorMap = new ColorMap(sourceWidth, sourceHeight);

    for(let x=0; x<sourceColorMap.getWidth(); x++)
    {
      for(let y=0; y<sourceColorMap.getHeight(); y++)
      {
        let sourcePixel = sourceColorMap.getPixel(x, y);
        let resultPixel = this.convoluteForPixel(x, y, sourceColorMap);

        resultColorMap.setPixel(x, y, resultPixel);
      }
    }

    return resultColorMap;
  }

  private convoluteForPixel(x, y, colorMap) : Color
  {
    return (colorMap.getPixel(x, y).invert());
  }
}
