function* generator(){ 
  yield 1; 
  yield 2; 
  yield 3; 
}; 

for (const g of generator()) { 
  console.log(g); 
}

// Output:
// 1
// 2
// 3
