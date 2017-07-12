//for-in-example.js
Array.prototype.newArr = () => {};
Array.prototype.anotherNewArr = () => {};
const array = ['foo', 'bar', 'baz'];

for (const value in array) { 
  console.log(value);
}
// Outcome:
// 0
// 1
// 2
// newArr
// anotherNewArr