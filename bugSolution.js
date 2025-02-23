function foo(a, b) {
  a = a === null ? 0 : a; //If a is null then assign 0 else assign a
  b = b === null ? 0 : b; //If b is null then assign 0 else assign b
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null));// Output: 0