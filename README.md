# FizzBuzz - A Coding Project
This program loops through 1 to 100, displays "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both 3 and 5, or simply the number if none of these conditions are met.


# Live Demo
https://jorysmith.github.io/FizzBuzz/

# Description
A JavaScript coding exercise using loops, functions, booleans, and conditional statements.

The code is structured in three functions: getUserInputs(), conditionalCheckOfInputs(), and displayResults().

First, the program gets user input values for Fizz and Buzz with the getUserInputs() function, which have to be converted to numbers then parsed to ensure integers are being used. Next, the conditionalCheckOfInputs() is called and the validated integer values are passed as parameters. 

For the logic step, conditionalCheckOfInputs() takes the parameters, loops through 1 to 100 with a for loop, checking to See if each value is divisible by 1- Fizz only 2- Buzz only 3- Both or 4- Neither. The results are pushed to the fizzBuzzArray, which the function returns once completed.

Lastly, displayResults() is called with the new array passed in as a parameter. This function loops over finalFizzBuzzArray and creates a tableRow for each item. A template of a table row with 5 TDs is created in the index.html file, which is stored in a JS variable. A for loop is used to iterate over finalFizzBuzzArray in increments of 5, the classList of finalFizzBuzzArray is added to each TD item, and each TD textContent is set to equal each finalFizzBuzzArray item. The results are injected into the DOM under the "Results" section.
                    

