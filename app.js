//  1. Write a function that takes an array of numbers and returns their sum.

function sumArray (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
var number = [1, 3, 5, 7, 9]
console.log(sumArray(number));

// 2. Write a function that reverses a string.

function reverse_string (str) {
  var revrse = "";
  for (var i = str.length - 1; i >= 0; i--) {
      revrse += str[i];
  }
  return revrse;
}
console.log(reverse_string("good"));

// 3. Write a function that finds the largest number in an array.

function larNumber (arr) {
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(larNumber([1, 2, 3, 4, 5]));

// 4. Write a function that counts the number of vowels in a string.

function countVowels (str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("PrestIgioUs"));

// 5. Write a function that removes duplicates from an array.

function removeDuplicate (arr) {
  var Array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Array.includes(arr[i])) {
      Array.push((arr[i]));
    }
  }
  return Array;
}
console.log(removeDuplicate([1, 1, 2, 3, 2, 4]));

// 6. Write a function that capitalizes the first letter of each word in a sentence.


function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    }
    return str.join(" ");
}
console.log(capital_letter("I am the student of SMIT"));







