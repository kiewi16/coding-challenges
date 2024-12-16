// Given five positive integers, 
// find the minimum and maximum values 
// that can be calculated by summing 
// exactly four of the five integers.
// Then print the respective minimum
// and maximum values as a single line
// of two space-separated long integers.

// For example, [1, 3, 7, 9, 5]. 
// Our minimum sum is 1 + 3 + 7 + 5 = 16 
// and our maximum sum is 3 + 7 + 9 + 5 = 24
// We would return: [16, 24]

// Another example, [6, 13, 2, 21, 11]. 
// Our minimum sum is 6 + 13 + 2 + 11 = 32 
// and our maximum sum is 6 + 13 + 21 + 11 = 51
// We would return: [32, 51]

// declare a function that takes in an array of numbers 
    // declare a var max and assign it to numbers.sort(). use the spread operator to create a copy of the numbers array because sort modifies the original array. 
        // b-a (to order the numbers in descending order)
        // use slice to remove the last (lowest number) element from max. Start index will be 0. End index will be 4. 
        // use reduce to sum the numbers in the max array. Include 0 as the initial value.
    
    // declare a var min and assign it to numbers.sort(). use the spread operator to create a copy of the numbers array because sort modifies the original array. 
        // a-b (to sort the numbers in ascending order)
        // use slice to remove the last (highest number) element from min. Start index will be 0. End index will be 4. 
        // use reduce to sum the numbers in the min array. Include 0 as the initial value. 

    // return [min, max]

const getMiniMaxSum = numbers => {
    let max = [...numbers].sort((a, b) => b-a).slice(0, 4).reduce((acc, num) => acc + num, 0)
    let min = [...numbers].sort((a, b) => a-b).slice(0, 4).reduce((acc, num) => acc + num, 0)
    return [min, max]
  };
  
  console.log(getMiniMaxSum([1, 3, 7, 9, 5]));
  console.log(getMiniMaxSum([6, 13, 2, 21, 11]))