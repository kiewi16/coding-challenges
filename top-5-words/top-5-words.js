// Given a sample of text, write code that lists the top five most frequently occurring word
// (ignoring punctuation and casing)

// convert text which is a string to an array of strings
    // text.split(/[\s,.;!]+/)

// declare a function that takes in one argument that is an array of strings 
    // use reduce (array prototype method) to iterate over the array and count each word
    // const wordCount = array.reduce((accumulator, word)
    // the initial value will be an empty object, where we will create a series of key-value pairs that are a word and the number of times it appears in the array
    // for example, the: 7
        // if !accumulator[word]
            // accumulator[word] = 1 ; create the key which is the specific word in the array and assign the key a value of one
        // else accumulator[word] ++ ; if the key (word) exists, then increase its count by 1
        // return accumulator
    // return wordCount

// use .sort() to sort wordCount from largest to smallest 

const text = "The quick brown fox jumps over the lazy dog. The dog barked. This is a simple sentence used for testing word count functions. In the world of programming, understanding how to manipulate strings and arrays is crucial for efficient coding. Knowing how to split strings into arrays, iterate through them, and perform various operations like counting occurrences of each word. Additionally, when analyzing data, it becomes important to normalize text inputs to avoid discrepancies caused by case sensitivity or punctuation.";
const textArray = text.split(/[\s,.;!]+/).map(word => word.toLocaleLowerCase())

function countWords(textArray) {
    const wordCount = textArray.reduce((acc, word) => {
        if(!acc[word]) {
            acc[word] = 1
        } else {
            acc[word]++ 
        }
        return acc
    }, {})
    const sortedWords = Object.entries(wordCount).sort((a, b ) => b[1] - a[1])
    
    return sortedWords.slice(0, 5).map(sortedWord => {
        return sortedWord[0]
    })
}

console.log(countWords(textArray))