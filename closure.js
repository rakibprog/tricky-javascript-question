// Closure, encapsulation, private variable declared 
function stopWatch() {
    let counter = 0; //reference put
    return function() {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());