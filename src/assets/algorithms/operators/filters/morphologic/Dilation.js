var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dilation = (function (_super) {
    __extends(Dilation, _super);
    function Dilation(structuringElement) {
        _super.call(this, structuringElement);
    }
    Dilation.prototype.convoluteForPixel = function (x, y, colorMap) {
        var startIndexX = x - ((this.structuringElement.getHeight() - 1) / 2);
        var startIndexY = y - ((this.structuringElement.getWidth() - 1) / 2);
        var maxColor = new RGBColor(0, 0, 0);
        for (var x_1 = 0; x_1 < this.structuringElement.getHeight(); x_1++) {
            for (var y_1 = 0; y_1 < this.structuringElement.getWidth(); y_1++) {
                var sourcePixel = colorMap.getPixel(startIndexX + x_1, startIndexY + y_1);
                if (this.structuringElement.getValueOnPos(x_1, y_1)) {
                    if (sourcePixel.r > maxColor.r)
                        maxColor.r = sourcePixel.r;
                    if (sourcePixel.g > maxColor.g)
                        maxColor.g = sourcePixel.g;
                    if (sourcePixel.b > maxColor.b)
                        maxColor.b = sourcePixel.b;
                }
            }
        }
        return maxColor;
    };
    return Dilation;
}(MorphologicFilter));
//# sourceMappingURL=Dilation.js.map