
const minDistance = 100;
const obj = document.getElementById('my-button');

const maxX = document.documentElement.clientWidth - 60;
const maxY = document.documentElement.clientHeight - 60;

obj.addEventListener('click', function (evt) {
    obj.style.display = 'none';
    obj.style.left = getRandomInt(0, maxX) + 'px';
    obj.style.top = getRandomInt(0, maxY) + 'px';
    setTimeout(() => {
        obj.style.display = 'block';
    }, 100);
});

document.addEventListener('mousemove', function (evt) {
    const objCoords = obj.getBoundingClientRect();
    const distance = calcDistance(evt.clientX, evt.clientY, objCoords.x, objCoords.y);
    if (distance < minDistance) {
        obj.style.left = getRandomInt(0, maxX) + 'px';
        obj.style.top = getRandomInt(0, maxY) + 'px';
    }
});

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


