var ColorMap = (function () {
    function ColorMap(width, height) {
        this.width = width;
        this.height = height;
        this.pixels = new Array(width);
        for (var x = 0; x < this.width; x++) {
            this.pixels[x] = new Array(height);
            for (var y = 0; y < this.height; y++) {
                this.pixels[x][y] = new RGBColor(0, 0, 0);
            }
        }
    }
    ColorMap.prototype.copy = function () {
        var copyColorMap = new ColorMap(this.width, this.height);
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                copyColorMap.setPixel(x, y, this.getPixel(x, y));
            }
        }
    };
    ColorMap.prototype.getWidth = function () {
        return this.width;
    };
    ColorMap.prototype.getHeight = function () {
        return this.height;
    };
    ColorMap.prototype.getPixel = function (i, j) {
        if (i < 0)
            return new RGBColor(0, 0, 0);
        if (j < 0)
            return new RGBColor(0, 0, 0);
        if (i >= this.width)
            return new RGBColor(0, 0, 0);
        if (j >= this.height)
            return new RGBColor(0, 0, 0);
        return this.pixels[i][j];
    };
    ColorMap.prototype.setPixel = function (i, j, color) {
        this.pixels[i][j] = color;
    };
    return ColorMap;
}());
//# sourceMappingURL=ColorMap.js.map