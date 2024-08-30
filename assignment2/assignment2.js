// 1. Variables and Data Types
// Challenge:

// Create three variables:

// A variable for a person's name.
// A variable for their age.
// A variable for whether they are a student (boolean).
// Instructions:

// Declare the variables with appropriate data types.
// Assign values to these variables.
// Log each variable's value and its data type to the console.

let name = "Sokly Hour"; 
let age = 21; 
let isStudent = true; 

console.log(`Name: ${name}, Type: ${typeof name}`);
console.log(`Age: ${age}, Type: ${typeof age}`);
console.log(`Is Student: ${isStudent}, Type: ${typeof isStudent}`);

// 2. Basic Arithmetic Operations
// Challenge:

// Declare two number variables and perform addition, subtraction, multiplication, and division with them.

// Instructions:

// Declare two variables with numerical values.
// Addition, subtraction, multiplication, and division are performed using these variables.
// Log the result of each operation to the console.

let num1 = 2;
let num2 = 2;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Working with Strings
// Challenge:

// Declare a string variable containing a sentence.

// Instructions:

// Declare a string variable and assign it a sentence.
// Log the length of the string, the first character, and the last character to the console using string methods.

// String variable

let sentence = "Hello, my name is Sokly Hour";

console.log("Length of string:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

// 4. Math Object
// Challenge:

// Declare a variable with a negative number and use the Math object to perform various calculations.

// Instructions:

// Declare a variable with a negative numerical value.
// Use the Math object to calculate and log the square root, the number squared, and the absolute value of the variable.

let negativeNumber = -2;

console.log("Square root:", Math.sqrt(Math.abs(negativeNumber)));
console.log("Number squared:", Math.pow(negativeNumber, 2));
console.log("Absolute value:", Math.abs(negativeNumber));

// 5. Boolean Logic and Comparison Operators
// Challenge:

// Declare two number variables and compare them using comparison operators.

// Instructions:

// Declare two number variables with numerical values.
// Use comparison operators to determine and log whether the first number is greater than, less than, or equal to the second number.

let numFirst = 11;
let numSecond = 15;

console.log("Is numFirst greater than numSecond?", numFirst > numSecond);
console.log("Is numFirst less than numSecond?", numFirst < numSecond);
console.log("Is numFirst equal to numSecond?", numFirst === numSecond);

// 6. Logical Operators
// Challenge:

// Declare two boolean variables and evaluate logical operations.

// Instructions:

// Declare two boolean variables and assign them boolean values (true or false).
// Log the results of logical AND (&&), OR (||), and NOT (!) operations using these variables.

let boolean1 = true;
let boolean2 = false;

console.log("boolean1 AND boolean2:", boolean1 && boolean2);
console.log("boolean1 OR boolean2:", boolean1 || boolean2);
console.log("NOT boolean1:", !boolean1);
console.log("NOT boolean2:", !boolean2);

// 7. Using Template Literals
// Challenge:

// Create a greeting message using template literals.

// Instructions:

// Declare two variables for a person's first and last name.
// Use template literals to create a greeting message that includes both names.
// Log the greeting message to the console.

let firstName = "Sokly";
let lastName = "Hour";

let greeting = `Hello, ${firstName} ${lastName}! Nice to meet you.`;
console.log(greeting);

