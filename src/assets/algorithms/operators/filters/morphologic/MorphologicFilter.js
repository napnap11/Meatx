var MorphologicFilter = (function () {
    function MorphologicFilter(structuringElement) {
        this.structuringElement = structuringElement;
    }
    MorphologicFilter.prototype.convolute = function (sourceColorMap) {
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
    MorphologicFilter.prototype.convoluteForPixel = function (x, y, colorMap) {
        throw "convoluteForPixel has not been implemented in this SubClass!";
    };
    return MorphologicFilter;
}());
//# sourceMappingURL=MorphologicFilter.js.map