// QUESTION 1

// function reverseString(reverse) {
//     let reversed = '';
  
//     for (let i = reverse.length - 1; i >= 0; i--) {
//       reversed += reverse[i];
//     }
  
//     return reversed;
//   }

//   const oneString = 'MyHonesty';
//   const reversedString = reverseString(oneString);
  
//   console.log(reversedString);


// QUESTION 2
// function counttheVowels(str) {
//  str = str.toLowerCase();

//     let vowelCount = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// const inputString = "Name is salwah";
// const numberOfVowels = counttheVowels(inputString);
// console.log(`The number of vowels in "${inputString}" is: ${numberOfVowels}`);

// QUESTION 3
// const school="lion is the king";

// const words= school.split(' ');


// for(let i=0; i <words.length; i++)
// words[i]=words[i][0].toUpperCase()+ words[i].slice(1);


// const result = words.join(" ")
// console.log(result);

// QUESTION 4

// const word = "BOB";
// const lowercaseWord = word.toLowerCase(); 
// const reversedWord = lowercaseWord.split('').reverse().join('');

// if (lowercaseWord === reversedWord) {
//   console.log(`${word} is a palindrome.`);
// } else {
//   console.log(`${word} is not a palindrome.`);
// }


// QUESTION 5
// const numbers = [2, 6, 3, 4, -5, 6,3];

// const sumOfPositives = numbers.reduce((sum, number) => {
//   if (number > 0) {
//     return sum + number;
//   } else {
//     return sum;
//   }
// }, 0);

// console.log("Sum of positive numbers:", sumOfPositives);


// QUESTION 6
// const numbers = [11, 10, 20, 40, 20, 31];
// const elementToFind = 20;

// const indexOfElement = numbers.indexOf(elementToFind);


//   console.log(`The index of the first occurrence of ${elementToFind} is:
//    ${indexOfElement}`);

// QUESTION 7
// function removeDuplicates(arr) {
//     const uniqueArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//         uniqueArray.push(arr[i]);
//       }
//     }
  
//     return uniqueArray;
//   }
  
//   // Example usage
//   const originalArray = [18, 3, 3, 5, 2, 5, 90, 18];
//   const newArrayWithoutDuplicates = removeDuplicates(originalArray);
  
//   console.log(newArrayWithoutDuplicates);

// QUESTION 8
// function bubbleSortAscending(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//       for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
          
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
//   const sortedAscending = bubbleSortAscending([...originalArray]);
  
//   console.log('Sorted in Ascending Order:', sortedAscending);
//   //decending
//   function bubbleSortDescending(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//       for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] < arr[j + 1]) {
//           // Swap elements if they are in the wrong order
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   // Example usage
//   const sortedDescending = bubbleSortDescending([...originalArray]);
//   console.log('Sorted in Descending Order:', sortedDescending);
//QUESTION 9

// let num = 2;

// while (num <= 20) {
//     console.log(num);
//     num += 2;
// }

// QUESTION 10

// function calculateFactorial(number) {
//     let factorial = 1;
//     let i = 1;

//     do {
//         factorial *= i;
//         i++;
//     } while (i <= number);

//     return factorial;
// }

// const numberToFactorial = 8;
// const result = calculateFactorial(numberToFactorial);
// console.log(`The factorial of ${numberToFactorial} is: ${result}`);


// QUESTION 11

// const myObject = {
//     name: 'zymul',
//     age: 30,
//     city: 'lahore'
// };

// for (let property in myObject) {
//     if (myObject.hasOwnProperty(property)) {
//         console.log(`${property}: ${myObject[property]}`);
//     }
// }

// QUESTION 12

// const myArray = [1, 2, 3, 4, 5];
// const doubledArray = [];


// for (let element of myArray) {
//     doubledArray.push(element * 2);
// }

// console.log(doubledArray);

// QUESTION 13

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return `${number} is even.`;
//     } else {
//         return `${number} is odd.`;
//     }
// }

// // Example: Check if 7 is even or odd
// const result = checkEvenOrOdd(7);
// console.log(result);

// QUESTION 14

// function findMaxOfThree(num1, num2, num3) {
//     const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
//     return `The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`;
// }

// // Example: Find the maximum of 7, 12, and 5
// const maximum = findMaxOfThree(7, 12, 5);
// console.log(maximum);

// QUESTION 15

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return `${year} is a leap year.`;
//     } else {
//         return `${year} is not a leap year.`;
//     }
// }

// // Example: Check if 2024 is a leap year
// const result = isLeapYear(2024);
// console.log(result);