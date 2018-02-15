
class StructuringElement
{
  private matrix : Array<Array<boolean>>

  constructor(matrix : Array<Array<boolean>>)
  {
    this.matrix = matrix;
  }

  public getWidth() : number
  {
    return this.matrix[0].length;
  }

  public getHeight() : number
  {
    return this.matrix.length;
  }

  public getValueOnPos(x, y) : boolean
  {
    return this.matrix[x][y];
  }
}
