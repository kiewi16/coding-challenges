// write a function that can print the song "99 Bottles of Beer"

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it arround, 98 bottles of beer of the wall.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// input: number
// output: string where # of bottles decrements from 99 until 1. 
// use a recursive function to solve this?
// base case if number === 1, then return "No more bottles of beer on the wall.
// no more bottles of beer. Go to the store and buy some more, 99 bottles of 
// beer on the wall"

function printSong(number) {
    if (number === 99) {
        console.log(`${number} bottles of beer on the wall, ${number} of bottles of beer.`)
    }

    if (number <= 98 && number > 1) {
        console.log(`Take one down and pass it around, ${number} bottles of beer on the wall.`)
    }

    if (number === 1) {
        console.log(`Take one down and pass it around, ${number} bottle of beer on the wall.`)
    }

    if (number === 0) {
        return `No more bottles of beer on the wall. Go to the store and buy some more, 99 bottles of beer on the wall.`
    }

    if (number <= 98 && number > 1) {
        console.log(`${number} bottles of beer on the wall, ${number} bottles of beer.`)
    }

    if (number === 1) {
        console.log(`${number} bottle of beer on the wall, ${number} bottle of beer.`)
        console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
    }

    return printSong(number - 1)

}

// console.log(printSong(99))

function printSong2(number) {
    if (number === 0) {
        return `No more bottles of beer on the wall. Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }

    let bottleWord = number === 1 ? 'bottle' : 'bottles';
    let nextNumber = number - 1;
    let nextBottleWord = nextNumber === 1 ? 'bottle' : 'bottles';

    console.log(`${number} ${bottleWord} of beer on the wall, ${number} ${bottleWord} of beer.`);

    if (number > 0) {
        console.log(`Take one down and pass it around, ${nextNumber > 0 ? `${nextNumber} ${nextBottleWord}` : 'no more bottles'} of beer on the wall.`);
    }

    if (number > 0) {
        return printSong2(nextNumber);
    }
}

// console.log(printSong2(99));

function printSong3() {
    for (let i = 99; i > 0; i--) {
        if (i > 2) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
            console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
        }

        if (i === 2) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
            console.log(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`)
        }

        if (i === 1) {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`)
            console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
        }
    }
}

// console.log(printSong3())

function printSong4() {
    for (let i = 99; i > 0; i--) {
        if (i > 1) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
            console.log(`Take one down and pass it around, ${i - 1} ${i - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.`);
        } else {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
            console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
        }
    }
}

console.log(printSong4())