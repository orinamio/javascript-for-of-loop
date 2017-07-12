const iterable = new Map([['one', 1], ['two', 2]]);

for (const [key, value] of iterable) {
  console.log(`Key: ${key} and Value: ${value}`);
}

// Output:
// Key: one and Value: 1
// Key: two and Value: 2