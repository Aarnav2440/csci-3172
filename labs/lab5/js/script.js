function primeFinder(n){
    let flag = "prime";

    if(n === 0 || n === 1){
        flag = "neither";
    }
      for(let i = 2; i < n; i++){
          if(n % i === 0){
          flag = "comp";
          break;
        }
    }
    
    return flag;

}
function calculate(event){
    event.preventDefault();

    let input = document.getElementById("numbers").value.trim();
    const numArray = input.split(",");

    let primeForCounter = 0;
    let primeForEachCounter = 0;
    let primeMapCounter = 0;

    let compForCounter = 0;
    let compForEachCounter = 0;
    let compMapCounter = 0;

    let neitherForCounter = 0;
    let neitherForEachCounter = 0;
    let neitherMapCounter = 0;

    let type;
    let prime_output;
    let composite_output;
    let neither_output;

   //ForEach code

    numArray.forEach( (numEach, index) =>{
        let parsedNum = parseInt(numEach);
        let result = primeFinder(parsedNum);

        if(result === "prime"){
            primeForEachCounter++;
        }
        else if(result === "neither"){
            neitherForEachCounter++;
        }
        else{
            compForEachCounter++;
        }
    });
    type = "ForEach-loop:";
    prime_output = primeForEachCounter;
    composite_output = compForEachCounter;
    neither_output =  neitherForEachCounter;

    let htmlInject = `	
    <span id="loops">${type}</span> 
        <ul>
            <li>
                <span id="prime">Prime Numbers: ${prime_output}</span>
                <span id="prime-output"></span>
            </li>
            <li>
                <span id="composite">Composite Numbers: ${composite_output}</span>
                <span id="composite-output"></span>
            </li>
            <li>
                <span id="neither">Neither: ${neither_output}</span>
                <span id="neither-output"></span>
            </li>
        </ul>`;

    document.getElementById("form-output").innerHTML += htmlInject;


    //For Loop code
    for(i = 0; i < numArray.length; i++){
        let result = primeFinder(parseInt(numArray[i]));
        if(result === "prime"){
            primeForCounter++;
        }
        else if(result === "neither"){
            neitherForCounter++;
        }
        else{
            compForCounter++;
        }
    }

    type = "For-loop:";
    prime_output = primeForCounter;
    composite_output = compForCounter;
    neither_output =  neitherForCounter;

    htmlInject = `	
    <span id="loops">${type}</span> 
        <ul>
            <li>
                <span id="prime">Prime Numbers: ${prime_output}</span>
                <span id="prime-output"></span>
            </li>
            <li>
                <span id="composite">Composite Numbers: ${composite_output}</span>
                <span id="composite-output"></span>
            </li>
            <li>
                <span id="neither">Neither: ${neither_output}</span>
                <span id="neither-output"></span>
            </li>
        </ul>`;

    document.getElementById("form-output").innerHTML += htmlInject;


    // Map code
    const mapArray = numArray.map(numMap => primeFinder(parseInt(numMap)));
    // now we have an array of elements(map) transformed the original array with resultant values from the prime finder which look like this original [20,31,1,55,6] => [comp, prime, neither, comp, comp]
   // we can either run a for loop or a for each to iterate through this transformed map.
   mapArray.forEach( (numMap, index) =>{
    if(numMap === "prime"){
        primeMapCounter++;
    }
    if(numMap === "neither"){
        neitherMapCounter++;
    }
    if(numMap === "comp"){
        compMapCounter++;
    }
});

   type = "Map:";
    prime_output = primeMapCounter;
    composite_output = compMapCounter;
    neither_output =  neitherMapCounter;

    htmlInject = `	
    <span id="loops">${type}</span> 
        <ul>
            <li>
                <span id="prime">Prime Numbers: ${prime_output}</span>
                <span id="prime-output"></span>
            </li>
            <li>
                <span id="composite">Composite Numbers: ${composite_output}</span>
                <span id="composite-output"></span>
            </li>
            <li>
                <span id="neither">Neither: ${neither_output}</span>
                <span id="neither-output"></span>
            </li>
        </ul>`;

    document.getElementById("form-output").innerHTML += htmlInject;

}
