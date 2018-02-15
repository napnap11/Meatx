
class GaussFilter extends LinearFilter
{
  constructor()
  {
    let mask = new FilterMask(
    [
      [0, 1, 2, 1, 0],
      [1, 3, 5, 3, 1],
      [2, 5, 9, 5, 2],
      [1, 3, 5, 3, 1],
      [0, 1, 2, 1, 0]
    ]);
    mask.normalize();

    super(mask);
  }
}
