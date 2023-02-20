

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