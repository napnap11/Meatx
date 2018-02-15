
class ImageToColorMapParser
{
  static parse(image) : ColorMap
  {
    let result = new ColorMap(image.width, image.height);
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);
    let imageData = ctx.getImageData(0, 0, image.width, image.height).data;

    for(let x=0; x<canvas.width; x++)
    {
      for(let y=0; y<canvas.height; y++)
      {
        let r = imageData[x*4 + y*image.width*4 + 0];
        let g = imageData[x*4 + y*image.width*4 + 1];
        let b = imageData[x*4 + y*image.width*4 + 2];

        let pixel = new RGBColor(r, g, b);
        result.setPixel(x, y, pixel);
      }
    }

    return result;
  }
}
