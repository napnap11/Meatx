
class RGBColor implements Color
{
  public r;
  public g;
  public b;

  constructor(r, g, b)
  {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  add(summand : RGBColor) : RGBColor
  {
    let result = new RGBColor(0, 0, 0);

    result.r = this.r + summand.r;
    result.g = this.g + summand.g;
    result.b = this.b + summand.b;

    return result;
  }

  subtract(subtrahend : RGBColor) : RGBColor
  {
    let difference = new RGBColor(0, 0, 0);

    difference.r = this.r - subtrahend.r;
    difference.g = this.g - subtrahend.g;
    difference.b = this.b - subtrahend.b;

    return difference;
  }

  multiply(factor : number) : RGBColor
  {
    let result = new RGBColor(0, 0, 0);

    result.r = this.r * factor;
    result.g = this.g * factor;
    result.b = this.b * factor;

    return result;
  }

  invert()
  {
    let result = new RGBColor(0, 0, 0);

    result.r = 255 - this.r;
    result.g = 255 - this.g;
    result.b = 255 - this.b;

    return result;
  }
}
