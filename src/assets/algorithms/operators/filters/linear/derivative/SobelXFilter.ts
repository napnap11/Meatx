
class SobelXFilter extends LinearFilter
{
  constructor()
  {
    let mask = new FilterMask(
    [
      [1, 0, -1],
      [2, 0, -2],
      [1, 0, -1]
    ]);

    mask.normalize();
    super(mask);
  }
}
