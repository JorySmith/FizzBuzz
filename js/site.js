// Get user inputs for Fizz and Buzz
function getUserInputs() {
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    // Convert input values to numbers
    let fizzValue = parseInt(fizzNumber);
    let buzzValue = parseInt(buzzNumber);

    // Ensure values are integers and not decimals
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // Call conditionalCofInputs 
        let finalFizzBuzzArray = conditionalCheckOfInputs(fizzValue, buzzValue);

        // Call displayResults() to display results in the DOM
        displayResults(finalFizzBuzzArray);
    } else {
        alert("Please only use integers")
    }    
}

// Logic
// Loop through 1 to 100 with a for loop
// See if each value is divisible by 1- Fizz only 2- Buzz only 3- Both or 4- Neither
function conditionalCheckOfInputs(fizzValue, buzzValue) {
    // Initialize return array
    let fizzBuzzArray = [];

    // For loop from 1 - 100
    for (let i = 1; i <= 100; i++) {        
        // Current value divisible by Both check
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            // Push "FizzBuzz" to fizzBuzzArray
            fizzBuzzArray.push("FizzBuzz");            
        } else if (i % fizzValue == 0) { // Divisible by Fizz only check
            // Push "Fizz" to fizzBuzzArray
            fizzBuzzArray.push("Fizz");   
        } else if (i % buzzValue == 0) {  // Divisible by Buzz only check  
            // Push "Buzz" to fizzBuzzArray
            fizzBuzzArray.push("Buzz");         
        } else {
            // Value is not divisible by fizz or buzz
            // Send value
            fizzBuzzArray.push(i);
        }       
    }           
    return fizzBuzzArray;
}      

// Display tabular results in the DOM
// Loop over finalFizzBuzzArray and create a tableRow for each item
// Create template HTML of a table row with 5 TDs
function displayResults(finalFizzBuzzArray) {
    // Get and store results table from the HTML DOM
    let resultsTable = document.getElementById("results");

    // Get and store the template row doc fragment from the HTML DOM
    let templateRow = document.getElementById("fbTemplate");

    // Clear table first, always start fresh 
    resultsTable.innerHTML= "";

    // Use a for loop to iterate over finalFizzBuzzArray in increments of 5
    //     
    for (let index = 0; index < finalFizzBuzzArray.length; index += 5) {       
        // Get and store document fragment template 
        let tableRow = document.importNode(templateRow.content, true);

        // Get and store the TDs from the document fragment        
        let rowCols = tableRow.querySelectorAll("td");
        
        // Add classList of finalFizzBuzzArray to each TD 
        // Modify each TD textContent to equal each finalFizzBuzzArray item, doing a row of 5 items at a time
        rowCols[0].classList.add(finalFizzBuzzArray[index])
        rowCols[0].textContent = finalFizzBuzzArray[index];
        
        rowCols[1].classList.add(finalFizzBuzzArray[index + 1])
        rowCols[1].textContent = finalFizzBuzzArray[index + 1];

        rowCols[2].classList.add(finalFizzBuzzArray[index + 2])
        rowCols[2].textContent = finalFizzBuzzArray[index + 2];

        rowCols[3].classList.add(finalFizzBuzzArray[index + 3])
        rowCols[3].textContent = finalFizzBuzzArray[index + 3];

        rowCols[4].classList.add(finalFizzBuzzArray[index + 4])
        rowCols[4].textContent = finalFizzBuzzArray[index + 4];

        // Append rowCols to the resultsTable
        resultsTable.appendChild(tableRow);
    }
}