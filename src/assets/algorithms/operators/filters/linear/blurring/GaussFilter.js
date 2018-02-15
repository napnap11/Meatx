var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GaussFilter = (function (_super) {
    __extends(GaussFilter, _super);
    function GaussFilter() {
        var mask = new FilterMask([
            [0, 1, 2, 1, 0],
            [1, 3, 5, 3, 1],
            [2, 5, 9, 5, 2],
            [1, 3, 5, 3, 1],
            [0, 1, 2, 1, 0]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return GaussFilter;
}(LinearFilter));
//# sourceMappingURL=GaussFilter.js.map