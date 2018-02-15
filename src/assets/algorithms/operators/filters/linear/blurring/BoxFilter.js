var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoxFilter = (function (_super) {
    __extends(BoxFilter, _super);
    function BoxFilter() {
        var mask = new FilterMask([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return BoxFilter;
}(LinearFilter));
//# sourceMappingURL=BoxFilter.js.map