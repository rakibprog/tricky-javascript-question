//global scope
const number = 20;

function add(x, y) {
    const sum = x + y + number;
    return sum;
}
const result = add(10, 20);
console.log(result);
console.log(number);

// block scope {}
function add(x) {
    console.log(mood) // hoisting 
    if (x > 9) {
        var mood = 'cranky';
        console.log('condition is true');
    }
    console.log(mood);

}
add(10);

function add(x) {
    if (x > 9) {
        //global liking
        mood = 'cranky';
        console.log('condition is true');
    }

}
add(10);
console.log(mood);

//What is the reason for writing with the let 

for (var i = 0; i < 10; i++) {

}
console.log(i);
// do not use for out of for loop
for (let i = 0; i < 10; i++) {

}
console.log(i);

// NoTe 
// let and const uses there will be no hoisting