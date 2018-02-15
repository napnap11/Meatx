class Erosion extends MorphologicFilter
{
  constructor(structuringElement : StructuringElement)
  {
    super(structuringElement);
  }

  protected convoluteForPixel(x, y, colorMap) : Color
  {
    let startIndexX = x - ((this.structuringElement.getHeight() - 1) / 2);
    let startIndexY = y - ((this.structuringElement.getWidth() - 1) / 2);

    let minColor = new RGBColor(255, 255, 255);

    for(let x=0; x<this.structuringElement.getHeight(); x++)
    {
      for(let y=0; y<this.structuringElement.getWidth(); y++)
      {
        let sourcePixel = colorMap.getPixel(startIndexX + x, startIndexY + y);

        if(this.structuringElement.getValueOnPos(x, y))
        {
          if(sourcePixel.r < minColor.r) minColor.r = sourcePixel.r;
          if(sourcePixel.g < minColor.g) minColor.g = sourcePixel.g;
          if(sourcePixel.b < minColor.b) minColor.b = sourcePixel.b;
        }
      }
    }

    return minColor;
  }
}
