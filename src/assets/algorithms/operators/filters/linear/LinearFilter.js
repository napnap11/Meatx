var LinearFilter = (function () {
    function LinearFilter(filterMask) {
        this.filterMask = filterMask;
    }
    LinearFilter.prototype.convolute = function (sourceColorMap) {
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
    LinearFilter.prototype.convoluteForPixel = function (x, y, colorMap) {
        console.assert(x % 1 === 0, "x must be an integer");
        console.assert(y % 1 === 0, "y must be an integer");
        var startIndexX = x + ((this.filterMask.getHeight() - 1) / 2);
        var startIndexY = y + ((this.filterMask.getWidth() - 1) / 2);
        var result = new RGBColor(0, 0, 0);
        for (var x_1 = 0; x_1 < this.filterMask.getHeight(); x_1++) {
            for (var y_1 = 0; y_1 < this.filterMask.getWidth(); y_1++) {
                var sourcePixel = colorMap.getPixel(startIndexX - x_1, startIndexY - y_1);
                result = result.add(sourcePixel.multiply(this.filterMask.getValueOnPos(y_1, x_1)));
            }
        }
        return result;
    };
    return LinearFilter;
}());
//# sourceMappingURL=LinearFilter.js.map