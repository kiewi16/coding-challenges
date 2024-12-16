// three arrays of equal size
// each array has 1 million RANDOM integer values
// each array is sorted in ascending order 
// each array does not have any duplicate values

// write a method/function that will return an array of any/all values which are present in all three arrays
// input: three arrays of random numbres 
// output: array of numbers that are present in all three arrays 

// determine if numbers in nums1 array are present in nums2 array
// if a number in nums1 array is NOT present in nums2 array, then you don't need to see if the number from nums1 array is present in the nums3 array
// use iterator method to iterate through nums1 array and nums2 array to compare numbers in both arrays 
// if a number is present in nums1 and nums2 array, then push that number to a new array (aka nums4)

// compare numbers in nums3 array to numbers in nums4 array using iterator method
// if a number is present in both nums3 and nums4 array, then push that number to a new array (aka nums5)

// returns nums5 which is the array that contains numbers that are present in the nums1, nums2, and nums3 arrays

let nums1 = [1, 2, 4, 5, 8]
let nums2 = [2, 3, 5, 7, 9]
let nums3 = [1, 2, 5, 8, 9]

function findMatches(nums1, nums2, nums3) {
    let nums4 = []
    let nums5 = []

    nums1.forEach(num1 => {
        nums2.forEach(num2 => {
            if (num1 === num2) {
                nums4.push(num1)
            }
        })
    })
    nums3.forEach(num3 => {
        nums4.forEach(num4 => {
            if (num3 === num4) {
                nums5.push(num3)
            }
        })
    })
    return nums5
}
// console.log(findMatches(nums1, nums2, nums3))

// combine three arrays into a single array using .flatMap
// sort combined array in ascending order 
// count numbers and if a number is present 3 times, push it into a new array?

function findMatches(nums1, nums2, nums3) {
    const combined = [nums1, nums2, nums3].flatMap(num => num).sort((numA, numB) => {
        return numA - numB
    })
    const combinedCounted = combined.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue]) {
            accumulator[currentValue] ++
        } else {
            accumulator[currentValue] = 1
        }
        return accumulator
    }, {})
}

// console.log(findMatches(nums1, nums2, nums3))

function findMatches(nums1, nums2, nums3) {
    const set1 = new Set(nums1) // creates a new Set instance 
    const set2 = new Set(nums2)
    const set3 = new Set(nums3)

    const intersection12 = [...set1].filter(number => set2.has(number))
    const intersection123 = intersection12.filter(number => set3.has(number))

    return intersection123

}
console.log(findMatches(nums1, nums2, nums3))

// convert set1 to an array using the spread operator
// keeps only the numbers that are also in set2
// intersection12 is an array of the numbers that are in set1 and set2
// keeps only the numbers that are also in set3


// Set
// a Set is a built in object that lets you store unique values of any type.
// Set automatically removes duplicate valeus and only stores unique elements. 
// provides efficent O(1) average time complexity for checking the existence of an element

// newSet(nums1) processes the array so the resulting Set object only contains unique values 
// the Set constructor takes an iterable and creates a Set from its elements
// as it iterates over the elements of the nums1, it adds each element to the Set
// maintains the order of elements as they were first added

// Intersection
// refers to the common elements that are present in all of the sets or arrays being compared


