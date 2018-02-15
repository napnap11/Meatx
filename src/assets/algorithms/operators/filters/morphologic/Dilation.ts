class Dilation extends MorphologicFilter
{
  constructor(structuringElement : StructuringElement)
  {
    super(structuringElement);
  }

  protected convoluteForPixel(x, y, colorMap) : Color
  {
    let startIndexX = x - ((this.structuringElement.getHeight() - 1) / 2);
    let startIndexY = y - ((this.structuringElement.getWidth() - 1) / 2);

    let maxColor = new RGBColor(0, 0, 0);

    for(let x=0; x<this.structuringElement.getHeight(); x++)
    {
      for(let y=0; y<this.structuringElement.getWidth(); y++)
      {
        let sourcePixel = colorMap.getPixel(startIndexX + x, startIndexY + y);

        if(this.structuringElement.getValueOnPos(x, y))
        {
          if(sourcePixel.r > maxColor.r) maxColor.r = sourcePixel.r;
          if(sourcePixel.g > maxColor.g) maxColor.g = sourcePixel.g;
          if(sourcePixel.b > maxColor.b) maxColor.b = sourcePixel.b;
        }
      }
    }

    return maxColor;
  }
}
