var canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

var c = canvas.getContext('2d');

document.body.appendChild(canvas);


document.body.addEventListener('click', (e) => {
    data.push([e.pageX, e.pageY, 1]);
    this.draw();
});


// function draw() {
//     for (const i in data) {
//         c.beginPath();
//         c.arc(data[i][0]-10, data[i][1]-10, 10, 0, Math.PI * 2, false);
//         c.stroke();
//         c.fillStyle = "blue";
//         c.fill();
//     }
// }

