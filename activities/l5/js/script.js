//function declaration
//

function calculate (a, b, operation){
    let result = 0;

    if(operation == "add"){
        result = a + b;
    }
    else if(operation == "subtract"){
        result = a - b;
    }
    else if(operation == "multiply"){
        result = a * b;
    }
    else if(operation == "divide"){
        result = a / b;
    }
    else{
        console.log("Error: Invalid operation")
    }

    return result;
}
// example
console.log(calculate(1, 2, 'add'));
