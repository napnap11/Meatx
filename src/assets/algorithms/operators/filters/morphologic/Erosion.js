var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Erosion = (function (_super) {
    __extends(Erosion, _super);
    function Erosion(structuringElement) {
        _super.call(this, structuringElement);
    }
    Erosion.prototype.convoluteForPixel = function (x, y, colorMap) {
        var startIndexX = x - ((this.structuringElement.getHeight() - 1) / 2);
        var startIndexY = y - ((this.structuringElement.getWidth() - 1) / 2);
        var minColor = new RGBColor(255, 255, 255);
        for (var x_1 = 0; x_1 < this.structuringElement.getHeight(); x_1++) {
            for (var y_1 = 0; y_1 < this.structuringElement.getWidth(); y_1++) {
                var sourcePixel = colorMap.getPixel(startIndexX + x_1, startIndexY + y_1);
                if (this.structuringElement.getValueOnPos(x_1, y_1)) {
                    if (sourcePixel.r < minColor.r)
                        minColor.r = sourcePixel.r;
                    if (sourcePixel.g < minColor.g)
                        minColor.g = sourcePixel.g;
                    if (sourcePixel.b < minColor.b)
                        minColor.b = sourcePixel.b;
                }
            }
        }
        return minColor;
    };
    return Erosion;
}(MorphologicFilter));
//# sourceMappingURL=Erosion.js.map