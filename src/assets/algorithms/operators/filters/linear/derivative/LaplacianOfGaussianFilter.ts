
class LaplacianOfGaussianFilter extends LinearFilter
{
  constructor()
  {
    let mask = new FilterMask(
    [
      [ 0,  0, -1,  0,  0],
      [ 0, -1, -2, -1,  0],
      [-1, -2, 16, -2, -1],
      [ 0, -1, -2, -1,  0],
      [ 0,  0, -1,  0,  0]
    ]);
    mask.normalize();

    super(mask);
  }
}
