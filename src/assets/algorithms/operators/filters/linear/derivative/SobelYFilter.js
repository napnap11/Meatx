var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SobelYFilter = (function (_super) {
    __extends(SobelYFilter, _super);
    function SobelYFilter() {
        var mask = new FilterMask([
            [1, 2, 1],
            [0, 0, 0],
            [-1, -2, -1]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return SobelYFilter;
}(LinearFilter));
//# sourceMappingURL=SobelYFilter.js.map