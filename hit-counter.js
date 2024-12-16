// Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

// record(timestamp): records a hit that happened at timestamp
// total(): returns the total number of hits recorded
// range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)

// something to hold information:
// scale of seconds, linear 
    // positive integers that move into the future 

let hitCounter = {
    hits: [],
    record: function (time) {
       this.hits.push(time)
    },
    total: function() {
        return this.hits.length 
    }, 
    range: function(lower, upper) {
        return this.hits.map((hit) => hit >= lower && hit <= upper).filter(string => string === true).length
    }
}

hitCounter.record(2)
hitCounter.record(4)
hitCounter.record(5)
hitCounter.record(7)
hitCounter.record(9)

console.log(hitCounter.total())
console.log(hitCounter.range(3, 7))

// this is an object method: in the context of an object method, this refers to the object itself. Without this, JavaScript would look for a variable called hits in the local scope (the scope of the function), and if it doesn't find one, it would result in an error or unexpected behavior. 

// this helps you access the properties and methods of the current object.

// this is a reference to a current object