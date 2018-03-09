var HeatCanvas = function (canvas) {
    if (typeof (canvas) == "string") {
        this.canvas = document.getElementById(canvas);
    } else {
        this.canvas = canvas;
    }
    if (this.canvas == null) {
        return null;
    }
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.data = {};
}


HeatCanvas.prototype.push = function (x, y, data) {
    // ignore all data out of extent
    if (x < 0 || x > this.width) {
        return;
    }
    if (y < 0 || y > this.height) {
        return;
    }
    var id = x + y * this.width;
    if (this.data[id]) {
        this.data[id] = this.data[id] + data;
    } else {
        this.data[id] = data;
    }
};