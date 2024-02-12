function calculateRectangleArea() {
    //Get value rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    //Get value of rectangle length
    const rectangleLengthInput = document.getElementById('rectange-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    //Calculation of Rectangle area value
    const area = width * length;
    const triangleAreaSpan = document.getElementById('rectangle-area');
    triangleAreaSpan.innerText = area;
}