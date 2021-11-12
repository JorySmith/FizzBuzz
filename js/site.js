// Get user inputs for Fizz and Buzz
function getUserInputs() {
    let fizzNumber = document.getElementById("fizzNumber");
    let buzzNumber = document.getElementById("buzzNumber");
    let conditionalCheck = conditionalCheckOfInputs(fizzNumber, buzzNumber)
}

// Logic
// Loop through 0 to 100 with for loop
// See if each number is a multiple of 1) Fizz only 2) Buzz only 3) Both 4) Neither
function conditionalCheckOfInputs(fizzNumber, buzzNumber) {
    for (let i = 1; i <= 100; i++) {
        
        // Multiple of Both check
        if (i % fizzNumber == 0 && i % buzzNumber == 0) {
            // Replace number with "FizzBuzz" string

            i++
            continue
        }
        // Multiple of Fizz only check   
        if (i % fizzNumber == 0 && i % buzzNumber == 0) {
            // Replace number with "Fizz" string
            i++
            continue
        }
        // Multiple of Buzz only check  
        if (i % fizzNumber == 0 && i % buzzNumber == 0) {
            // Replace number with "Buzz" string
            i++
            continue
        }
         // Number met none of the above conditions, therefore, it's a multiple of neither
         // Send number
         i++
         continue
        }        
    }
}


// Display tabular results in the DOM
function displayResults() {

}