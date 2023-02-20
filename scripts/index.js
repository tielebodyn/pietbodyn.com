// get html elements
const container = document.getElementById('container');
const slider = document.getElementById('rangeSlider');
const body = document.body;


// add default column amount on page load
let currentCols = 6;
container.classList.add(`col-${currentCols}`);


// when slider changes
slider.addEventListener('input', () => {
    container.classList.remove(`col-${currentCols}`);
    currentCols = slider.value
    container.classList.add(`col-${currentCols}`)
})

const triangle = document.getElementById('triangle');
const triangleText = document.getElementById('triangleText');
triangle.addEventListener('mouseover', () => {
    triangleText.classList.remove('transparent');
    triangleText.style.animation = "color-change 2s infinite";
})
triangle.addEventListener('mouseout', () => {
    triangleText.classList.add('transparent');
    triangleText.style.animation = "";
})
