
class Vector
{
  private values : Array<number>

  constructor(dimension : any)
  {
      this.values = new Array(dimension);
      for(let i=0; i<dimension; i++)
      {
        this.values[i] = 0;
      }
  }

  public getDimension()
  {
    return this.values.length;
  }

  public getValue(index : number)
  {
    return this.values[index];
  }

  public setValue(index : number, value : number)
  {
    this.values[index] = value;
  }

  public add(summand : Vector)
  {
    console.assert(this.getDimension() === summand.getDimension(), "Vector Dimensions are similar");

    let result = new Vector(this.getDimension());

    for(let i=0; i<this.getDimension(); i++)
    {
      result.setValue(i, this.getValue(i) + summand.getValue(i));
    }

    return result;
  }

  public multiply(factor : number)
  {
    let result = new Vector(this.getDimension());

    for(let i=0; i<this.getDimension(); i++)
    {
      result.setValue(i, this.getValue(i) * factor);
    }

    return result;
  }
}
