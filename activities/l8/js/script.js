//function declaration

function calculate (operation){
	let a = parseInt(document.getElementById("number1"));
	let b = parseInt(document.getElementById("number2"));
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

// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values


// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above
 
 



	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	
	// We perform our addition on the two values
	

	// Display the result of the calculation
	






