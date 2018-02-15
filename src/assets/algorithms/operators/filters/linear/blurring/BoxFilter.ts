
class BoxFilter extends LinearFilter
{
  constructor()
  {
    let mask = new FilterMask(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]);
    mask.normalize();
    super(mask);
  }
}
