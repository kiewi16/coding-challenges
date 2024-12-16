// write a program that calculates the next 20 leap years

// declare a function called calculateLeapYears that accepts the currentYear (2024)

    // declare a variable called leapYears
    // use forEach to iterate through years array
        // check if the year is evenly divisible by 4
            // if the year is evenly divisibly by 4, push year to leapYears
            // if the year is not evenly divisibly by 4, do nothing
            // the % modulo operator calculates the remainder of the vision of one number by another. If the remainder is 0, it means the first number can be evenly divided by the second number. 

function calculateNext20LeapYears(currentYear) {
    let leapYears = []
    let year = currentYear + 1

    while (leapYears.length < 20) {
        if ((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)) {
            leapYears.push(year)
        }
        year++
    }
    return leapYears

}
// console.log(calculateNext20LeapYears(2024))