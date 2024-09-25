// 1. Create a function to calculate the area of a circle with a radius of 6
function calculateCircleArea() {
    const radius = 6; // const used since the radius is a fixed value
    const pi = 3.14159;
    const area = pi * radius * radius;
    console.log("The area of the circle is: " + area);
}
//
// Call the function to print the area of the circle
calculateCircleArea();

console.log("1. Please select calculate option for arithmetic operation followed by any one operation: add, subtract, multiply, divide. eg: calculate(value1, value2, 'operation');");

// 2. Create a function that implements the arithmetic operations: addition, subtraction, multiplication, and division.
function calculate(value1, value2, operation) {
    let result = 0; // Using 'let' because result will be reassigned based on the operation
    if (operation === 'add') {
        result = value1 + value2;
    } else if (operation === 'subtract') {
        result = value1 - value2;
    } else if (operation === 'multiply') {
        result = value1 * value2;
    } else if (operation === 'divide') {
        if (value2 === 0) {
            console.log("Division by zero is not allowed.");
            return;
        } else {
            result = value1 / value2;
        }
    } else {
        console.log("Invalid operation.");
        return;
    }
    console.log('The result of ' + operation + ' is: ' + result);
}

// 3. Create a function to calculate the area of a rectangle with length 20 and width 15
function calculateRectangleArea() {
    const length = 20;
    const width = 15;
    const area = length * width;
    console.log("The area of the rectangle is: " + area);
}

// Call the function to print the area of the rectangle
calculateRectangleArea();

/* What is the scope of a const variable?
    The scope of const variable is block scope.


When were the let and const keywords added to Javascript?
The const and let variables were added in 2015 with the introduction of ES6.

*/
