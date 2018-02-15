var StructuringElement = (function () {
    function StructuringElement(matrix) {
        this.matrix = matrix;
    }
    StructuringElement.prototype.getWidth = function () {
        return this.matrix[0].length;
    };
    StructuringElement.prototype.getHeight = function () {
        return this.matrix.length;
    };
    StructuringElement.prototype.getValueOnPos = function (x, y) {
        return this.matrix[x][y];
    };
    return StructuringElement;
}());
//# sourceMappingURL=StructuringElement.js.map