
class SobelYFilter extends LinearFilter
{
  constructor()
  {
    let mask = new FilterMask(
    [
      [ 1,  2,  1],
      [ 0,  0,  0],
      [-1, -2, -1]
    ]);

    mask.normalize();
    super(mask);
  }
}
