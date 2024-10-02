let returnMessage = "The number entered";

function oddEven(n){
    if(n % 2 === 0){
        returnMessage += " is an even";
    }
    else{
        returnMessage += " is an odd";
    }
}

function primeFinder(n){
    flag = true;

    if(n === 0||n === 1){
        flag = false;
      }

      for(let i = 2; i < n; i++){
          if(n % i === 0){
          flag=false;
          break;
        }
    }
    
    return flag;

}
function rangeFinder(n) {
    if (n <= 50) {
        returnMessage += " less than or equal to 50.";
    } 
    else if (n > 50 && n <= 75) {
        returnMessage += " greater than 50 and less than or equal to 75.";
    } 
    else if (n > 75 && n <= 100) {
        returnMessage += " greater than 75 and less than or equal to 100.";
    } 
    else {
        returnMessage += " greater than 100.";
    }
}

let days = document.getElementById("daysBox");
let container = document.getElementById("calender");

days.addEventListener("change", () => {
    switch(days.value) {
        case "Monday":
            container.style.backgroundColor = "pink";
            break;
        case "Tuesday":
            container.style.backgroundColor = "green";
            break;
        case "Wednesday":
            container.style.backgroundColor = "blue";
                break;
        case "Thursday":
            container.style.backgroundColor = "red";
            break;
        case "Friday":
            container.style.backgroundColor = "purple";
            break;
        case "Saturday":
            container.style.backgroundColor = "violet";
            break;
        case "Sunday":
            container.style.backgroundColor = "grey";
            break;    
        default:
            container.style.backgroundColor = "brown";
}})

let formInput = document.getElementById("number-form").addEventListener("submit", (e) =>{
let number = parseInt(document.getElementById("number-id").value);

oddEven(number);
let resultPrime = primeFinder(number);

if(resultPrime === true){
    returnMessage += " prime number";
}
else{
    returnMessage += " composite number";
}
rangeFinder(number);
alert(returnMessage);

})
