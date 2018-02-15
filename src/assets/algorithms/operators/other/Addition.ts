
class Addition
{
  constructor()
  {

  }

  public convolute(summands : Array<ColorMap>) : ColorMap
  {
    let maxWidth = this.getMaxWidthOfSummands(summands);
    let maxHeight = this.getMaxHeightOfSummands(summands);

    let result = new ColorMap(maxWidth, maxHeight);

    for(let i=0; i<summands.length; i++)
    {
      let summand = summands[i];
      let sourceWidth = summand.getWidth();
      let sourceHeight = summand.getHeight();
      let resultColorMap = new ColorMap(sourceWidth, sourceHeight);

      for(let x=0; x<summand.getWidth(); x++)
      {
        for(let y=0; y<summand.getHeight(); y++)
        {
          let sourcePixel = summand.getPixel(x, y);
          result.setPixel(x, y, result.getPixel(x, y).add(sourcePixel));
        }
      }
    }

    return result;
  }

  private getMaxWidthOfSummands(summands : Array<ColorMap>)
  {
    let maxWidth = 0;
    console.log(summands);
    for(let i=0; i<summands.length; i++)
    {
      let summand = summands[i];
      let width = summand.getWidth();
      if(width > maxWidth) maxWidth = summand.getWidth();
    }
    return maxWidth;
  }

  private getMaxHeightOfSummands(summands : Array<ColorMap>)
  {
    let maxHeight = 0;
    for(let i=0; i<summands.length; i++)
    {
      let summand = summands[i];
      let height = summand.getHeight();
      if(height > maxHeight) maxHeight = summand.getHeight();
    }
    return maxHeight;
  }
}
