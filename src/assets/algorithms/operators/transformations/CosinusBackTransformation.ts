
class CosinusBackTransformation
{
  constructor()
  {

  }

  private calcBaseVectors(rowLength : number)
  {
    let vectors = [];
    for(let i=0; i<rowLength; i++)
    {
      let vector = new Vector(rowLength);
      for(let j=0; j<rowLength; j++)
      {
        let alpha = (j==0) ? Math.sqrt(1/rowLength) : Math.sqrt(2/rowLength);
        vector.setValue(j, alpha * Math.cos(((0.5 + i)*j*Math.PI)/rowLength));
      }
      vectors.push(vector);
    }

    console.log(vectors);

    return vectors;
  }

  public transform(sourceColorMap : ColorMap) : ColorMap
  {
    let resultColorMap = new ColorMap(sourceColorMap.getWidth(), sourceColorMap.getHeight());
    let baseVectors = this.calcBaseVectors(sourceColorMap.getWidth());

    for(let y=0; y<sourceColorMap.getHeight(); y++)
    {
      for(let x=0; x<sourceColorMap.getWidth(); x++)
      {
        let color = this.multiplyBaseVectorWithSourcePixelValue(baseVectors[x], sourceColorMap, y);
        resultColorMap.setPixel(x, y, color);
      }
    }

    return resultColorMap;
  }

  private multiplyBaseVectorWithSourcePixelValue(baseVector : Vector, sourceColorMap : ColorMap, heightIndex : number)
  {
    let r = 0;
    let g = 0;
    let b = 0;

    for(let i=0; i<baseVector.getDimension(); i++)
    {
      r += baseVector.getValue(i) * (<RGBColor>sourceColorMap.getPixel(i, heightIndex)).r;
      g += baseVector.getValue(i) * (<RGBColor>sourceColorMap.getPixel(i, heightIndex)).g;
      b += baseVector.getValue(i) * (<RGBColor>sourceColorMap.getPixel(i, heightIndex)).b;
    }

    return new RGBColor(r, g, b);
  }
}
