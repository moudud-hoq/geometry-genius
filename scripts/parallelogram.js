function calculateParallelogramArea() {
    //get base value
    const parallelogramBaseInput = document.getElementById('parallelogram-base');//find input value by ID
    const parallelogramBaseValue = parallelogramBaseInput.value;//take the value of ID
    const base = parseFloat(parallelogramBaseValue);//Convert the value to number

    //get height value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightvalue = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightvalue);

    //Calculate the parallelogram area
    const area = base * height;

    //change the text by calculation
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}



