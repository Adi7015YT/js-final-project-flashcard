function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  function findMaxNumber(arr) {
    return Math.max(...arr);
  }
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const currentSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - currentSum;
  }
  function findDuplicates(arr) {
    const duplicates = [];
    const count = {};
  
    arr.forEach(num => {
      count[num] = (count[num] || 0) + 1;
      if (count[num] === 2) {
        duplicates.push(num);
      }
    });
  
    return duplicates;
  }

const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum); // Output: 15

const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);
console.log(maxNumber); // Output: 20

const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);
console.log(oddNumbers); // Output: [1, 3, 5]

const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');
console.log(isPalindromeResult); // Output: true
console.log(isNonPalindromeResult); // Output: false

const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);
console.log(missingNumber); // Output: 4

const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);
console.log(duplicateNumbers); // Output: [2, 4]
