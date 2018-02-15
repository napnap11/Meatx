
class ColorMapToImageParser
{
  static parse(colorMap : ColorMap, callback? : any)
  {
    let result = new Image();

    let canvas = document.createElement('canvas');
    canvas.width = colorMap.getWidth();
    canvas.height = colorMap.getHeight();
    let ctx = canvas.getContext('2d');

    for(let x=0; x<canvas.width; x++)
    {
      for(let y=0; y<canvas.height; y++)
      {
        let pixel = colorMap.getPixel(x, y);
        let r = Math.floor((<RGBColor>(pixel)).r);
        let g = Math.floor((<RGBColor>(pixel)).g);
        let b = Math.floor((<RGBColor>(pixel)).b);

        let fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillStyle = fillStyle;
        ctx.fillRect(x, y, 1, 1);
      }
    }

    let dataURL = canvas.toDataURL();
    result.src = dataURL;

    if(callback !== undefined)
      result.onload = callback;

    return result;
  }
}
