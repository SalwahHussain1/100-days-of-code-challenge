// Question 1: rewrite the code 
// let score = 60;
// const result = score >= 80 ? "true" : "false";
// console.log(result);


// Question 2: How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?
// const village = {
//     name: 'sara',
//     food: {
//       name: 'biryani',
//     },
//   };
  
//   const houseName = village.cook?.name;
//   console.log(houseName);
//   const lengthOfName = village.length?.name;
//   console.log(lengthOfName);
// Question 3: Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.
// for in loop
// const profile = {
//     name: 'salwah',
//     city: 'karachi'
//   };
  
//   for (let key in profile) {
//     console.log(key, profile[key]);
//   }
// for of loop
// const bike = ['honda', 'unique', 'unicorn', 'suzuki'];

// for (const brand of bike) {
//   console.log(brand);
// }
// Question 4: Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.
// function calculateAverage(numbers) 
//     {
//         if (numbers.length === 0) {
//           return 0;
//         }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
//   }
  
//   const array = [5, 9,10, 6, 8, 6, 3];
//   const averageValue = calculateAverage(array);
//   console.log("Average:", averageValue);
  
// Question : 5
// function outsidefunction() {
//     let outsidevariable = "This is brief closure function that i describe";
  
//     function insideFunction() {
//       console.log(outsidevariable);
//     }
  
//     return insideFunction;
//   }
  
//   
//   const closureFunction = outsidefunction();
//   
//   closureFunction(); 
// Question 6:  Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.
// const student = {
//     name: "salwah",
//     age: 22,
//     grades: [90, 70, 86, 92, 98,85,86],
//     calculateAverage: function () {
//       if (this.grades.length === 0) {
//         return 0; 
//       }
//       const sum = this.grades.reduce((acc, grade) => acc + grade, 0);

//       const average = sum / this.grades.length;
  
//       return average;
//     },
//   };
//   console.log('Average Grade', student.calculateAverage());

// Question 7:  How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy
// shallow copy example
// const realObject = { bike: "honda", price: 25000, location: { city: "karachi" } };
// const shallowCopy = {...realObject};
// console.log(shallowCopy);
// // Modifying shallow copy
// shallowCopy.bike = "unique";
// shallowCopy.location.city = "lahore";

// console.log(realObject);

// Deep copy example
// const realObject = { bike: "honda", price: 25000, location: { city: "karachi" } };

// const deepCopy = JSON.parse(JSON.stringify(realObject));

// console.log(deepCopy);

// // Modifying the deep copy
// deepCopy.price = 200;
// deepCopy.location.city = "islamabad";

// console.log(realObject);

// reference copy example

// const realObject = { bike: "honda", price: 25000, location: { city: "karachi" } };
// const referenceCopy = realObject;

// console.log(referenceCopy);


// // Modify the reference copy
// referenceCopy.bike = "honda";
// referenceCopy.location.city = "lahore";

// console.log(realObject);

// Question 8: Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
// const array = [11, 23, 66, 4, 55, 16, 57, 8, 10, 80];

// for (const number of array) {
//   const salwah = number % 2 === 0 ? 'even' : 'odd';
//   console.log(salwah, number);
// }



// Question 9: Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   let i = 0;
//   while (i < 8) {
//     console.log(i);
//     i++;
//   }
//   let i = 0;
//   do {
//     console.log(i);
//     i++;
//   } while (i < 9);
      
// Question 10: Provide an example of using optional chaining within a loop to access a potentially missing property of an object.
// const students = [
//     { name: 'salwah', age: 22, gpa: { history: 90, urdu: 85 } },
//     { name: 'anila', age: 25} , 
//     { name: 'razia', age: 20, gpa: { history: 75, urdu: 80 } },
//   ];
  
//   // Loop through the array of students and access the math grades using optional chaining
//   for (const student of students) {
//     const historygpa = student?.gpa?.history ?? 'missing';
  
//     console.log( historygpa);
//   }
  // Question 11: Write a for...in loop that iterates over the properties of an object and logs each property name and value.
//   const  baby = {
//    name : 'rafia',
//     hair: 'curly',
//     year: 2,
//     eyecolor: 'Blue',
//   };
  
//   for (const property in baby) {
    
//       console.log(property, baby[property]);
//     }
  // Question 12 Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let target = 7;
  
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//       console.log('found at index :', i);
//       break; 
//     }
//   }
  
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
  // Question 13: Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.
//   function calculateTax(income) {
//     let taxRate;
//     let taxAmount;
//     if (income <= 70000) {
//       taxRate = 0.1; // 10% 
//     } else if (income <= 80000) {
//       taxRate = 0.15; // 15% 
//     } else {
//       taxRate = 0.2; // 20% 
//     }
//     taxAmount = income * taxRate;
//     return taxAmount;
//   }
//   const income1 = 6000;
//   const income2 = 30000;
//   console.log('Tax amount of income1', calculateTax(income1));
//   console.log('Tax amount of income2', calculateTax(income2));
  // Question 14: Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.
  // Object definition
// const car = {
//     make: "suzuki",
//     model: "C9",
//     startEngine: function() {
//       console.log("My Car engine is start like buzz");
//     }
//   };
//   car.startEngine();
  
  
// Question 15: Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.
// function RegularFunction(){
//     this.value=89
//     this.method = function(){
//         console.log(this.value);
//     };
// }
// const regularConstructor = new RegularFunction()
// regularConstructor.method();

//   function ArrowFunction(){
//     this.value=90
//     this.method = () => {
//         console.log(this.value);
//     };
// }
// const arrowConstructor = new ArrowFunction()
// arrowConstructor.method();

  