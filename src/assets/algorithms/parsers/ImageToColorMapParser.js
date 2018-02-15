var ImageToColorMapParser = (function () {
    function ImageToColorMapParser() {
    }
    ImageToColorMapParser.parse = function (image) {
        var result = new ColorMap(image.width, image.height);
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        var imageData = ctx.getImageData(0, 0, image.width, image.height).data;
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.height; y++) {
                var r = imageData[x * 4 + y * image.width * 4 + 0];
                var g = imageData[x * 4 + y * image.width * 4 + 1];
                var b = imageData[x * 4 + y * image.width * 4 + 2];
                var pixel = new RGBColor(r, g, b);
                result.setPixel(x, y, pixel);
            }
        }
        return result;
    };
    return ImageToColorMapParser;
}());
//# sourceMappingURL=ImageToColorMapParser.js.map