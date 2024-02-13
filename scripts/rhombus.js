//Use of function method
function calculateRhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = 0.5 * d1 * d2;

    setInnerTextById('rhombus-area', area);
}

//Call above function as wish not hardcode
function getInputValueById(inputFieldId) {
    /*প্রথমে, ফাংশনটি inputFieldId নামক HTML এলিমেন্টের ID অনুসারে এলিমেন্টটি সনাক্ত করে। */
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
