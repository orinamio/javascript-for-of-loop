const obj = { length: 3, 0: 'foo', 1: 'bar', 2: 'baz' };

const array = Array.from(obj);
for (const value of array) { 
    console.log(value);
}
// Output:
// foo
// bar
// baz