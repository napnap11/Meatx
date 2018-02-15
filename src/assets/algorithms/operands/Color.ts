
interface Color
{
  add(color : Color) : Color;
  subtract(color : Color) : Color;
  multiply(factor : number) : Color;
  invert() : Color;
}
