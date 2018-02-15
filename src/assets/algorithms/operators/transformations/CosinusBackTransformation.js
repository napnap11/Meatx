var CosinusBackTransformation = (function () {
    function CosinusBackTransformation() {
    }
    CosinusBackTransformation.prototype.calcBaseVectors = function (rowLength) {
        var vectors = [];
        for (var i = 0; i < rowLength; i++) {
            var vector = new Vector(rowLength);
            for (var j = 0; j < rowLength; j++) {
                var alpha = (j == 0) ? Math.sqrt(1 / rowLength) : Math.sqrt(2 / rowLength);
                vector.setValue(j, alpha * Math.cos(((0.5 + i) * j * Math.PI) / rowLength));
            }
            vectors.push(vector);
        }
        console.log(vectors);
        return vectors;
    };
    CosinusBackTransformation.prototype.transform = function (sourceColorMap) {
        var resultColorMap = new ColorMap(sourceColorMap.getWidth(), sourceColorMap.getHeight());
        var baseVectors = this.calcBaseVectors(sourceColorMap.getWidth());
        for (var y = 0; y < sourceColorMap.getHeight(); y++) {
            for (var x = 0; x < sourceColorMap.getWidth(); x++) {
                var color = this.multiplyBaseVectorWithSourcePixelValue(baseVectors[x], sourceColorMap, y);
                resultColorMap.setPixel(x, y, color);
            }
        }
        return resultColorMap;
    };
    CosinusBackTransformation.prototype.multiplyBaseVectorWithSourcePixelValue = function (baseVector, sourceColorMap, heightIndex) {
        var r = 0;
        var g = 0;
        var b = 0;
        for (var i = 0; i < baseVector.getDimension(); i++) {
            r += baseVector.getValue(i) * sourceColorMap.getPixel(i, heightIndex).r;
            g += baseVector.getValue(i) * sourceColorMap.getPixel(i, heightIndex).g;
            b += baseVector.getValue(i) * sourceColorMap.getPixel(i, heightIndex).b;
        }
        return new RGBColor(r, g, b);
    };
    return CosinusBackTransformation;
}());
//# sourceMappingURL=CosinusBackTransformation.js.map