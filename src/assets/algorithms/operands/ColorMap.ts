
class ColorMap
{
  private pixels : Array<Array<Color>>;
  private width : number;
  private height : number;

  constructor(width : number, height : number)
  {
    this.width = width;
    this.height = height;

    this.pixels = new Array(width);
    for(let x=0; x<this.width; x++)
    {
      this.pixels[x] = new Array(height);
      for(let y=0; y<this.height; y++)
      {
        this.pixels[x][y] = new RGBColor(0, 0, 0);
      }
    }
  }

  public copy()
  {
    let copyColorMap = new ColorMap(this.width, this.height);
    for(let x=0; x<this.width; x++)
    {
      for(let y=0; y<this.height; y++)
      {
        copyColorMap.setPixel(x, y, this.getPixel(x, y));
      }
    }
  }

  public getWidth()
  {
    return this.width;
  }

  public getHeight()
  {
    return this.height;
  }

  public getPixel(i, j)
  {
    if(i<0) return new RGBColor(0, 0, 0);
    if(j<0) return new RGBColor(0, 0, 0);
    if(i>=this.width) return new RGBColor(0, 0, 0);
    if(j>=this.height) return new RGBColor(0, 0, 0);

    return this.pixels[i][j];
  }

  public setPixel(i : number, j : number, color : Color)
  {
    this.pixels[i][j] = color;
  }
}
