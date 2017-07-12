function args() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

args('a', 'b', 'c');
// Output:
// a
// b
// c