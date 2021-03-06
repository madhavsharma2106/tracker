var data=[[624,256,1],[631,443,1],[965,506,1],[1006,446,1],[1130,266,1],[488,274,1],[489,284,1],[507,357,1],[1038,741,1],[1038,741,1],[453,960,1],[450,951,1],[305,628,1],[305,628,1],[333,924,1],[730,1798,1],[727,1799,1],[375,1947,1],[371,1947,1],[326,1893,1],[283,1864,1],[210,1798,1],[182,1748,1],[1202,2585,1],[1202,2585,1],[1137,2726,1],[1137,2726,1],[746,2697,1],[746,2697,1],[179,2689,1],[170,2687,1],[101,2513,1],[109,2479,1],[167,2329,1],[202,2328,1],[640,2308,1],[1006,2147,1],[1118,2098,1],[1241,2353,1],[1202,2438,1],[1147,1439,1],[1147,1439,1],[923,1656,1],[596,1661,1],[492,1630,1],[184,1664,1],[177,1884,1],[115,1144,1],[109,1144,1],[31,1325,1],[30,1474,1],[38,1568,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[640,1723,1],[1020,452,1],[1020,452,1],[1020,452,1],[1020,452,1],[1020,452,1],[1020,452,1],[1020,452,1],[1020,452,1],[187,492,1],[187,492,1],[187,492,1],[187,492,1],[187,492,1],[187,492,1],[273,1122,1],[273,1122,1],[273,1122,1],[273,1122,1],[1049,739,1],[1049,739,1],[667,892,1],[667,892,1],[811,1232,1],[889,1207,1],[1009,1099,1],[1058,1040,1],[1066,991,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[1160,98,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[448,86,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[451,81,1],[453,103,1],[891,271,1],[891,271,1],[891,271,1],[886,275,1],[886,275,1],[886,275,1],[886,275,1],[886,275,1],[886,275,1],[886,275,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1],[537,677,1]];

var heat = new HeatMap();
var heatCanvasActive = false;

var activateButton = document.getElementById('toggleHeatCanvas');
activateButton.addEventListener('click',function (){
    heatCanvasActive = true;
    heat.overlayCanvas();
} );


document.body.addEventListener('click', (e) => {
    data.push([e.pageX, e.pageY, 1]);
    if (heatCanvasActive) {
        heat.draw();
    }
});

function HeatMap() {
    this.data = data;
    this.canvas;
    this.c;
}

HeatMap.prototype.overlayCanvas = function () {
    //Creating a Canvas to overlay on the page.
    this.canvas = document.createElement('canvas');
    this.canvas.id = "canvas";
    this.canvas.height = document.body.clientHeight;
    this.canvas.width = document.body.clientWidth;
    this.c = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
}

HeatMap.prototype.draw = function () {
    for (const i in this.data) {
        this.c.beginPath();
        this.c.arc(this.data[i][0] - 10, this.data[i][1] - 10, 10, 0, Math.PI * 2, false);
        this.c.stroke();
        this.c.fillStyle = "blue";
        this.c.fill();
    }
}

