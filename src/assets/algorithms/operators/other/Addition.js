var Addition = (function () {
    function Addition() {
    }
    Addition.prototype.convolute = function (summands) {
        var maxWidth = this.getMaxWidthOfSummands(summands);
        var maxHeight = this.getMaxHeightOfSummands(summands);
        var result = new ColorMap(maxWidth, maxHeight);
        for (var i = 0; i < summands.length; i++) {
            var summand = summands[i];
            var sourceWidth = summand.getWidth();
            var sourceHeight = summand.getHeight();
            var resultColorMap = new ColorMap(sourceWidth, sourceHeight);
            for (var x = 0; x < summand.getWidth(); x++) {
                for (var y = 0; y < summand.getHeight(); y++) {
                    var sourcePixel = summand.getPixel(x, y);
                    result.setPixel(x, y, result.getPixel(x, y).add(sourcePixel));
                }
            }
        }
        return result;
    };
    Addition.prototype.getMaxWidthOfSummands = function (summands) {
        var maxWidth = 0;
        console.log(summands);
        for (var i = 0; i < summands.length; i++) {
            var summand = summands[i];
            var width = summand.getWidth();
            if (width > maxWidth)
                maxWidth = summand.getWidth();
        }
        return maxWidth;
    };
    Addition.prototype.getMaxHeightOfSummands = function (summands) {
        var maxHeight = 0;
        for (var i = 0; i < summands.length; i++) {
            var summand = summands[i];
            var height = summand.getHeight();
            if (height > maxHeight)
                maxHeight = summand.getHeight();
        }
        return maxHeight;
    };
    return Addition;
}());
//# sourceMappingURL=Addition.js.map