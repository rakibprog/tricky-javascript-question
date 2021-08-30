/* Data Types : 
Primitive Data Type: 
1.String 
2.Number 
3.BigINT
4.Undefined
5.Null
6.Boolean
7.Symbol
*/
// Primitive Data Example:
let a = 'hello World';
let b = a;
b = 'how are you';
console.log(a, b)

//  Non Primitive Data Example
// Object is Non Primitive Data Type: 

const x = { a: 10 }
const y = x;
console.log(x, y);
y.a = 20;
console.log(x, y);