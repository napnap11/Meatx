
class FilterMask
{
  private matrix : Array<Array<number>>;

  constructor(matrix : Array<Array<number>>)
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

  public getValueOnPos(x : number, y : number) : number
  {
    console.assert(x % 1 === 0, "x must be an integer");
    console.assert(y % 1 === 0, "y must be an integer");
    console.assert(x >= 0, "x must be greater or equal to zero");
    console.assert(y >= 0, "y must be greater or equal to zero");
    console.assert(x < this.matrix.length, "x must be less than matrix width");
    console.assert(y < this.matrix[0].length, "y must be less than matrix height");

    return this.matrix[x][y];
  }

  public normalize() : void
  {
    let total = 0;

    for(let x=0; x<this.matrix.length; x++)
    {
      for(let y=0; y<this.matrix[x].length; y++)
      {
        total += Math.abs(this.matrix[x][y]);
      }
    }

    for(let x=0; x<this.matrix.length; x++)
    {
      for(let y=0; y<this.matrix[x].length; y++)
      {
        this.matrix[x][y] = this.matrix[x][y]/total;
      }
    }
  }
}
