// const arr = [2,6,8,10,11,3];

// const squaredArray = arr.map((element) => element * element);

// console.log(squaredArray); 

// Question 2: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.
// const salwah = ["smile", "cry", "happy", "sad", "laugh"];

// const filtering = salwah
//   .filter((str) => str.length >= 5)
//   .map((str) => str.toUpperCase());

// console.log(filtering);

// Question 3: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.
// const soap= [
//     { name: 'lux', price: 200 },
//     { name: 'dove', price: 308},
//     { name: 'dettole', price: 235 },
//     { name: 'safeguard', price: 338 }
//   ];
  
//   const sort = soap.sort((a, b) => b.price - a.price);
  
//   console.log(sort);
  

// Question 4: Use the `reduce` method to find the total sum of all even numbers in an array of integers.
// const newarr= [5, 12, 3, 24, 5, 16, 3, 6, 19, 20];

// const evensum = newarr.reduce((accumulator, currentNumber) => {
//   return currentNumber % 2 === 0 ? accumulator + currentNumber : accumulator;
// }, 0);

// console.log(evensum);

// Question 5: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const myobject = [
//     { id: 1, status: 'notworking' },
//     { id: 2, status: 'working' },
//     { id: 3, status: 'working' },
//     { id: 4, status: 'notworking' }
//   ];
  
//   const targetId = 2;
  
//   const targetObject = myobject.find(obj => obj.id === targetId);
  
//   if (targetObject) {
//     targetObject.status = 'completed';
//     console.log(targetId, myobject);
//   }
//    else {
//     console.log(`Object with id  not found.`);
//   }

// Question 6: Chaining Methods:** Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.
// const combinearr = [-5, -5, 9, -2, 30, -6, -5];

// const avrgPositives = combinearr
//   .filter(number => number > 0)
//   .reduce((sum, currentNumber, index, array) => sum + currentNumber / array.length, 0);

// const roundedAvrg = avrgPositives.toFixed(2);

// console.log(parseFloat(roundedAvrg));

//Question 7:  **Conditional Filtering:** Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.
// const Myagepeople= [
//     { name: 'hira', age: 25 },
//     { name: 'salwah', age: 20 },
//     { name: 'dua', age: 40 },
//     { name: 'rabia', age: 16 }
//   ];
  
//   function filterAdults(arrayOfPersons) {
//     return arrayOfPersons.filter(person => person.age >= 21);
//   }
  
//   const adultspeople = filterAdults(Myagepeople);
  
//   console.log(adultspeople);
   
// Question 8:  **Advanced Sorting:**Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.
// const sport= ['cricket', 'hockey', 'tennis', 'football', 'basketball', 'ball'];

// const sortsport = sport.sort((a, b) => a.length - b.length);

// console.log(sortsport);

// Question 9: **Nested Array Operations:**Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.
// const nested1 = [[2, 2, 5], [6, 9], [6, 5, 6, 3]];

// const arr = nested1.flat();

// const sumOftotal = arr.reduce((sum, number) => sum + number, 0);

// console.log(sumOftotal);

// Question 10: **Error Handling with Find:** modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.
// const pictures = [
//     { id: 1, type: 'verticle' },
//     { id: 2, type: 'horizontal' },
//     { id: 3, type: 'hybird' },
//     { id:4, type: 'square'}
//   ];
//   function findObjectById(array, targetId, newObject) {
//     const foundObject = array.find(obj => obj.id === targetId);
//     return foundObject || newObject;
//   }
//   const targetId = 5;
//   const newObject = { id: targetId, type: 'sorry Not Found' };
  
//   const result = findObjectById(pictures, targetId, newObject);
//   console.log(result);
  
// Question 11: Map Method:** How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?
// const arr = [1, 2, 3, 4, 5];

// const squareNumbers = arr.map(arr => arr * 2);
// console.log(squareNumbers);
// Question 12: . **Filter Method:**Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.
// const number = [25, 18, 4, 11, 8, 3, 1, 5, 6];


// const greater= number.filter(num => num > 6);

// console.log(greater);
// Question 13. **Sort Method:**Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?
// const enteries= [
//     { name: 'salwah', age: 22 },
//     { name: 'dua', age: 20 },
//     { name: 'razia', age: 30 }
//   ];
  
//   enteries.sort((person1, person2) => person1.age - person2.age);
  
//   console.log(enteries);

// Question 14. **Reduce Method:**Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.
// const myarr = [3, 2, 8, 13, 4, 5];

// // Computing the sum of numbers using reduce()
// const sum = myarr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 
// Question 15. **Find Method:**Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.
// const num = [15, 2, 18, 14, 16, 21, 4];

// Using find to find the first number greater than 10
// const first = num.find(number => number > 10);
// console.log(first); 
// const workers = [
//     { id: 1, name: 'Ali' },
//     { id: 2, name: 'bilal' },
//     { id: 3, name: 'riyan' }
//   ];
//     // Finding a user by ID using find()
//   const workerWithIdTwo = workers.find(user => user.id === 2);
  
//   console.log(workerWithIdTwo);
// Question 16. **Combining Methods:**Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.
// const arr1 = ["biryani", "korma", "shawarma", "fries", "juice"];

// const concatenatedarr = arr1
//   .filter(str => str.length > 5)  
//   .map(str => str.toUpperCase())  
//   .reduce((concatenated, currentString) => concatenated + currentString, "");  

// console.log(concatenatedarr);

// Question 17 **Callback Functions:**Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.
// const num= [11, 5, 9, 3, 8, 6 ,13];


// const square = num.map((num) => num * num);
// console.log(square);

// Question 18. **Error Handling:**Q: How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.
// const no = [];

// const sum = no.reduce((accumulator, currentValue) => {
//   if (currentValue === undefined || currentValue === null) {
//     return accumulator; 
//   }
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);
// Question 19 **Immutable Operations:**Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.
const arr = [1, 2, 3, 4, 5];

const Array = arr.map(num => num * 2);

console.log(arr); 
console.log(Array); 


// Using filter to keep only numbers greater than 6:
const arr2 = [12, 34, 1, 4, 30, 22, 23];

const filteredArray = arr2.filter(num => num > 6);

console.log(arr2); 
console.log(filteredArray); 

