var Vector = (function () {
    function Vector(dimension) {
        this.values = new Array(dimension);
        for (var i = 0; i < dimension; i++) {
            this.values[i] = 0;
        }
    }
    Vector.prototype.getDimension = function () {
        return this.values.length;
    };
    Vector.prototype.getValue = function (index) {
        return this.values[index];
    };
    Vector.prototype.setValue = function (index, value) {
        this.values[index] = value;
    };
    Vector.prototype.add = function (summand) {
        console.assert(this.getDimension() === summand.getDimension(), "Vector Dimensions are similar");
        var result = new Vector(this.getDimension());
        for (var i = 0; i < this.getDimension(); i++) {
            result.setValue(i, this.getValue(i) + summand.getValue(i));
        }
        return result;
    };
    Vector.prototype.multiply = function (factor) {
        var result = new Vector(this.getDimension());
        for (var i = 0; i < this.getDimension(); i++) {
            result.setValue(i, this.getValue(i) * factor);
        }
        return result;
    };
    return Vector;
}());
//# sourceMappingURL=Vector.js.map