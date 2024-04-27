//Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.


// This function changes a string into a number

function convertStringToNumber(str:string) : number {
    return parseFloat(str);                       // Converts the string to a number
}

console.log(convertStringToNumber("123.45"));    // Outputs: 123.45
console.log(convertStringToNumber("98"));        // Outputs: 98

