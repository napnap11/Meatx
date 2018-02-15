var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LaplacianOfGaussianFilter = (function (_super) {
    __extends(LaplacianOfGaussianFilter, _super);
    function LaplacianOfGaussianFilter() {
        var mask = new FilterMask([
            [0, 0, -1, 0, 0],
            [0, -1, -2, -1, 0],
            [-1, -2, 16, -2, -1],
            [0, -1, -2, -1, 0],
            [0, 0, -1, 0, 0]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return LaplacianOfGaussianFilter;
}(LinearFilter));
//# sourceMappingURL=LaplacianOfGaussianFilter.js.map