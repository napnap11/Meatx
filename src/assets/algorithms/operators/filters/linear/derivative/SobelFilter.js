var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SobelFilterX = (function (_super) {
    __extends(SobelFilterX, _super);
    function SobelFilterX() {
        _super.call(this, [
            [1, 0, -1],
            [2, 0, -2],
            [1, 0, -1]
        ], true);
    }
    return SobelFilterX;
}(LinearFilter));
//# sourceMappingURL=SobelFilter.js.map