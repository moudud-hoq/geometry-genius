// //Use Individuals Method
// function calculateParallelogramArea() {
//     //get base value
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');//find input value by ID
//     const parallelogramBaseValue = parallelogramBaseInput.value;//take the value of ID
//     const base = parseFloat(parallelogramBaseValue);//Convert the value to number

//     //get height value
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightvalue = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightvalue);

//     //Calculate the parallelogram area
//     const area = base * height;

//     //change the text by calculation
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }
/*-----------------------------------------------------------------------------*/



//Use Function Method
function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}



