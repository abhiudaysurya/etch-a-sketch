let sizeInput = document.getElementById('size')
let container = document.getElementById('container');

container.style.width='50vw';
container.style.height='50vw';

let size = Number(sizeInput.value);
let widthDot = 100/size;

let matrix = size * size;
for (let index = 0; index < matrix; index++) {
    let element = document.createElement('div');
    element.classList.add('dot');
    element.style.width=`${widthDot}%`
    element.style.aspectRatio = '1 / 1'; // Ensures circle shape
    element.style.borderRadius = '50%';
    element.style.border='1px solid rgb(0, 0, 0)';
    container.appendChild(element)
}
