let sizeInput = document.getElementById('size');
let container = document.getElementById('container');
let colorInput = document.getElementById('color');
let clearButton = document.getElementById('clear');
let resizeButton = document.getElementById('resize');

// Set initial container size
container.style.width = '50vw';
container.style.height = '50vw';

let mouseDown = false;

function refillBox() {
    let size = Number(sizeInput.value);

    container.innerHTML = '';

    let widthDot = 100 / size;
    let matrix = size * size;

    for (let index = 0; index < matrix; index++) {
        let element = createDotElement(widthDot);
        addDrawingEvents(element);
        container.appendChild(element);
    }
}

function createDotElement(widthDot) {
    let element = document.createElement('div');
    element.classList.add('dot');
    element.style.width = `${widthDot}%`;
    element.style.aspectRatio = '1 / 1'; // Ensures square
    element.style.borderRadius = '50%';  // Makes it a circle
    element.style.border = '1px solid rgb(0, 0, 0)';
    element.style.backgroundColor = 'white'; // Initial background
    return element;
}

function addDrawingEvents(element) {
    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
        mouseDown = true;
        element.style.backgroundColor = colorInput.value;
    });
    
    element.addEventListener('mouseenter', () => {
        if (mouseDown) {
            element.style.backgroundColor = colorInput.value;
        }
    });
    
    element.addEventListener('mouseleave', () => {
        // Optional: Add any mouseleave behavior here
    });
}

// Global mouse events
document.addEventListener('mouseup', () => {
    mouseDown = false;
});

// Prevent default drag behavior
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// Button event listeners
clearButton.addEventListener('click', () => {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.backgroundColor = 'white';
    });
});

resizeButton.addEventListener('click', () => {
    refillBox();
});

// Initialize the grid when page loads
refillBox();
