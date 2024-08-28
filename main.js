var logo = document.querySelector('#logo')

// speed of movement
var speed = 50;

// assinging directions randomly
var direction = {
    x:  Math.random() < 0.5 ? -speed : speed,
    y:  Math.random() < 0.5 ? -speed : speed,
}

// Changing direction when the edge is hit
function checkDirection(rect) {
    // check Edge hit in "Y" direction
    if (direction.y > 0 && rect.top + 100 >= window.innerHeight ||
        direction.y < 0 && rect.top <= 0) {
        direction.y *= -1;
        setRandomColor()    
    }

    // check Edge hit in "X" direction
    if (direction.x > 0 && rect.left + 100 >= window.innerWidth ||
        direction.x < 0 && rect.left <= 0) {
        direction.x *= -1;
        setRandomColor()
    }
}

// Moving depending on derection X, Y values
function moveLogo(rect) {
    logo.style.top = (rect.top + direction.y) + "px";
    logo.style.left = (rect.left + direction.x) + "px";
}

// generating and assining random color
function setRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    logo.style.background = color;
}

window.onload = () => {
    var move = setInterval(() => {
        let rect = logo.getBoundingClientRect();
        checkDirection(rect);
        moveLogo(rect);
    }, 100)
}