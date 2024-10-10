function validate(event){
        event.preventDefault();

    // Accessing the form input values via DOM elements and storing them in apt variables.
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let genderSelected= document.querySelector('input[name="gender"]:checked').value;
    let countrySelected = document.getElementById("country").value;
    

    //Creating required Regex patterns to test against input 
    const fnameRegex = /^[a-zA-Z]+$/;
    const lnameRegex = /^[a-zA-Z]+(['-][a-zA-Z]+)*$/;
    const emailRegex = /[\w-\.]+@([\w-]+\.)[\w]{2,6}/;


    if(!firstName){
        alert("first name is required");
        return;
    }
    else if(!fnameRegex.test(firstName)){
        alert("First Name, should be of type text");
        return;
    }

    if(!lastName){
        alert("Last Name is required");
        return;
    }
    else if(!lnameRegex.test(lastName)){
        alert("Last Name, should be of type text");
        return;
    }

    if(!email){
        alert("email is required");
        return;
    }
    else if(!emailRegex.test(email)){
        alert("Email, should be of type email and allow for email addresses");
        return;
    }

    if(!genderSelected){
        alert("gender is required");
        return;
    }
    
    var tableRows = `
            <tr>
                <td>First name</td>
                <td>${firstName}</td>
            </tr>
            <tr>
                <td>Last name</td>
                <td>${lastName}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>${genderSelected}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>${countrySelected}</td>
            </tr>

        `;

    document.getElementById("formDataTable").innerHTML = tableRows; 

    //answer two:
    // document.getElementById("formDataTable").innerHTML += tableRows; 

}

/* 
Q1) What is the use of preventDefault() ?
A1) It is an event canceller, any default action that belongs to that selected event on which this function is invoked will not occur for eg.
adding this to our submit button event we can cancel the submission to the form.
 
Q2)What changes require in code to keep previous data on the page? (Write the code line that requires to
modify)
A2)  To keep the previous form submission data on the page we can add a += to our line
  document.getElementById("formDataTable").innerHTML = tableRows; 
*/

 

