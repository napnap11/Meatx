var Inversion = (function () {
    function Inversion() {
    }
    Inversion.prototype.convolute = function (sourceColorMap) {
        var sourceWidth = sourceColorMap.getWidth();
        var sourceHeight = sourceColorMap.getHeight();
        var resultColorMap = new ColorMap(sourceWidth, sourceHeight);
        for (var x = 0; x < sourceColorMap.getWidth(); x++) {
            for (var y = 0; y < sourceColorMap.getHeight(); y++) {
                var sourcePixel = sourceColorMap.getPixel(x, y);
                var resultPixel = this.convoluteForPixel(x, y, sourceColorMap);
                resultColorMap.setPixel(x, y, resultPixel);
            }
        }
        return resultColorMap;
    };
    Inversion.prototype.convoluteForPixel = function (x, y, colorMap) {
        return (colorMap.getPixel(x, y).invert());
    };
    return Inversion;
}());
//# sourceMappingURL=Inversion.js.map