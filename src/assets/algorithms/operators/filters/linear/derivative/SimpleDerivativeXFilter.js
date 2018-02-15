var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleDerivativeXFilter = (function (_super) {
    __extends(SimpleDerivativeXFilter, _super);
    function SimpleDerivativeXFilter() {
        var mask = new FilterMask([
            [0, 0, 0],
            [1, 0, -1],
            [0, 0, 0]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return SimpleDerivativeXFilter;
}(LinearFilter));
//# sourceMappingURL=SimpleDerivativeXFilter.js.map