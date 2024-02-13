/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 */

//এভাবে করতে হবে সুন্দর দেখানোর জন্য দুই নং মেথড ফলো করছি
//01 method
// function calculateTriangleArea() {
//     //get value triangle base
//     const triangleBaseInput = document.getElementById('triangle-base');
//     const triangleBaseText = triangleBaseInput.value;
//     const base = parseFloat(triangleBaseText)

//     //get value triangle height
//     const triangleHeightInput = document.getElementById('triangle-height');
//     const triangleHeightText = triangleHeightInput.value;
//     const height = parseFloat(triangleHeightText)

//     //calculate triangle area
//     const area = 0.5 * base * height;

//     //display triangle area value
//     const triangleAreaSpan = document.getElementById('triangle-area');
//     triangleAreaSpan.innerText = area;
// }

// Method-2
function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleAreaSpan = document.getElementById('triangle-area');

    const triangleBaseText = triangleBaseInput.value;
    const triangleHeightText = triangleHeightInput.value;

    const base = parseFloat(triangleBaseText)
    const height = parseFloat(triangleHeightText)

    const area = 0.5 * base * height;
    triangleAreaSpan.innerText = area;
}