// Write a console application that outputs the results of the following analysis of an input text. 
// First preference would be to read the text from a file (of your own specification).

// For each unique character that appears in the input string, report the number of occurrences of that character in the input. 
// Report each character on its own line, in descending order based on the number of occurrences. Each line should be formatted as follows:
// <character>: <number of occurrences>



// Example:
// analyze aaabbc
// output:   
// a: 3
// b: 2
// c: 1

// Prompt:
// Write a function that analyzes "I really want to work for Wingspan" and returns:
// : 6
// o: 3
// r: 3
// a: 3
// n: 3
// w: 2
// l: 2
// t: 2
// k: 1
// W: 1
// p: 1
// g: 1
// i: 1
// I: 1
// f: 1
// y: 1
// s: 1
// e: 1
// There is no defined order for reporting characters that have the same number of occurrences. 
// Such entries can appear in any order of your choosing in the output.

const string = "I really want to work for Wingspan"

function countCharacters(string) {
    let newObject = string.split("").reduce((acc, char) => {
        if (!acc[char]) {
            acc[char] = 1
        } else {
            acc[char] ++
        }
        return acc
    }, {})

    let sortedObject = Object.entries(newObject).sort((a, b) => b[1] - a[1])
    return Object.fromEntries(sortedObject)
}
console.log(countCharacters(string))

function countCharacters2(string) {
    const countMap = new Map()

    for (const char of string) {
        countMap.set(char, (countMap.get(char) || 0) + 1)
    }

    return Object.fromEntries([...countMap].sort((a, b) => b[1] - a[1]))
}
console.log(countCharacters2(string))