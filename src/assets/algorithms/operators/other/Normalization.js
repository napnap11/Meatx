var Normalization = (function () {
    function Normalization() {
    }
    Normalization.prototype.convolute = function (sourceColorMap) {
        var minR = 9999;
        var minG = 9999;
        var minB = 9999;
        var maxR = -9999;
        var maxG = -9999;
        var maxB = -9999;
        for (var x = 0; x < sourceColorMap.getWidth(); x++) {
            for (var y = 0; y < sourceColorMap.getHeight(); y++) {
                var sourcePixel = sourceColorMap.getPixel(x, y);
                if (sourcePixel.r < minR)
                    minR = sourcePixel.r;
                if (sourcePixel.g < minG)
                    minG = sourcePixel.g;
                if (sourcePixel.b < minB)
                    minB = sourcePixel.b;
                if (sourcePixel.r > maxR)
                    maxR = sourcePixel.r;
                if (sourcePixel.g > maxG)
                    maxG = sourcePixel.g;
                if (sourcePixel.b > maxB)
                    maxB = sourcePixel.b;
            }
        }
        var resultColorMap = new ColorMap(sourceColorMap.getWidth(), sourceColorMap.getHeight());
        for (var x = 0; x < sourceColorMap.getWidth(); x++) {
            for (var y = 0; y < sourceColorMap.getHeight(); y++) {
                var sourcePixel = sourceColorMap.getPixel(x, y);
                var r = (sourcePixel.r - minR) / (maxR - minR) * 255;
                var g = (sourcePixel.g - minG) / (maxG - minG) * 255;
                var b = (sourcePixel.b - minB) / (maxB - minB) * 255;
                resultColorMap.setPixel(x, y, new RGBColor(r, g, b));
            }
        }
        return resultColorMap;
    };
    return Normalization;
}());
//# sourceMappingURL=Normalization.js.map