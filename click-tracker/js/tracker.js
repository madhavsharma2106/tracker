
mouseMovementTracker = (event) => {
    // console.log("Mouse  at: (" + event.clientX + "," + event.clientY + ")");
    createDot(event, "green", 5);
}

mouseClickTracker = (event) => {
    // console.log("Mouse Clicked at: (" + event.clientX + "," + event.clientY + ")");
    // console.log(event.target);
    // console.log(event.target.documentElement);
    // console.log(event.target.body);
    createDot(event, "red", 15);
}

createDot = (event, color, size) => {
    dot = document.createElement('div');
    dot.className = "dot";
    dot.style.backgroundColor = color;
    dot.style.left = event.pageX + "px";
    dot.style.top = event.pageY + "px";
    dot.style.width =  size + "px";
    dot.style.height =  size + "px";
    document.body.appendChild(dot);
}


window.onmousemove = mouseMovementTracker;
window.onclick = mouseClickTracker;