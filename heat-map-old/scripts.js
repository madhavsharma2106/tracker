$canvas = document.getElementById('canvas');
$canvas.height = 500;
$canvas.width = 500;
pressure = 20;


//Triggering and Adding Data
$canvas.addEventListener('click', (e) => {
    var localX = e.clientX - e.target.offsetLeft;
    var localY = e.clientY - e.target.offsetTop;
    addData(localX, localY, pressure);
});

function addData(localX, localY, value) {
    heatMap.push(localX, localY, value);
    document.getElementById("canvas").getContext("2d").fillText(value, localX, localY);
}

heatMap = new HeatCanvas('canvas');