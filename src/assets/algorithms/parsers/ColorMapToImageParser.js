var ColorMapToImageParser = (function () {
    function ColorMapToImageParser() {
    }
    ColorMapToImageParser.parse = function (colorMap, callback) {
        var result = new Image();
        var canvas = document.createElement('canvas');
        canvas.width = colorMap.getWidth();
        canvas.height = colorMap.getHeight();
        var ctx = canvas.getContext('2d');
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.height; y++) {
                var pixel = colorMap.getPixel(x, y);
                var r = Math.floor((pixel).r);
                var g = Math.floor((pixel).g);
                var b = Math.floor((pixel).b);
                var fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillStyle = fillStyle;
                ctx.fillRect(x, y, 1, 1);
            }
        }
        var dataURL = canvas.toDataURL();
        result.src = dataURL;
        if (callback !== undefined)
            result.onload = callback;
        return result;
    };
    return ColorMapToImageParser;
}());
//# sourceMappingURL=ColorMapToImageParser.js.map