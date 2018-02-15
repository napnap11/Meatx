var Subtraction = (function () {
    function Subtraction() {
    }
    Subtraction.prototype.convolute = function (colorMaps) {
        var minuend = colorMaps.shift();
        var subtrahend = (new Addition()).convolute(colorMaps);
        var result = new ColorMap(minuend.getWidth(), minuend.getHeight());
        for (var x = 0; x < minuend.getWidth(); x++) {
            for (var y = 0; y < minuend.getHeight(); y++) {
                var minuendPixel = minuend.getPixel(x, y);
                var subtrahendPixel = subtrahend.getPixel(x, y);
                result.setPixel(x, y, minuendPixel.subtract(subtrahendPixel));
            }
        }
        return result;
    };
    return Subtraction;
}());
//# sourceMappingURL=Subtraction.js.map