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