var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SobelXFilter = (function (_super) {
    __extends(SobelXFilter, _super);
    function SobelXFilter() {
        var mask = new FilterMask([
            [1, 0, -1],
            [2, 0, -2],
            [1, 0, -1]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return SobelXFilter;
}(LinearFilter));
//# sourceMappingURL=SobelXFilter.js.map