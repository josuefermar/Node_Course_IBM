let length, width;

const getFloatValue = (nameValue) =>  parseFloat(document.getElementById(nameValue).value);

function calculateArea(){
    length = getFloatValue('length');
    width = getFloatValue('width');

    let area = length * width;

     document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}