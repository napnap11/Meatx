var RGBColor = (function () {
    function RGBColor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    RGBColor.prototype.add = function (summand) {
        var result = new RGBColor(0, 0, 0);
        result.r = this.r + summand.r;
        result.g = this.g + summand.g;
        result.b = this.b + summand.b;
        return result;
    };
    RGBColor.prototype.subtract = function (subtrahend) {
        var difference = new RGBColor(0, 0, 0);
        difference.r = this.r - subtrahend.r;
        difference.g = this.g - subtrahend.g;
        difference.b = this.b - subtrahend.b;
        return difference;
    };
    RGBColor.prototype.multiply = function (factor) {
        var result = new RGBColor(0, 0, 0);
        result.r = this.r * factor;
        result.g = this.g * factor;
        result.b = this.b * factor;
        return result;
    };
    RGBColor.prototype.invert = function () {
        var result = new RGBColor(0, 0, 0);
        result.r = 255 - this.r;
        result.g = 255 - this.g;
        result.b = 255 - this.b;
        return result;
    };
    return RGBColor;
}());
//# sourceMappingURL=RGBColor.js.map