const arr = [1, 1, 1, 1, 3, 4, 4, 4, 1234, 1234, 1233];
const obj = { dog: `bark`, cat: `bark`, cow: `moo` };
const deDuplicate = input => [...new Set(input)];

console.log(deDuplicate(arr)); // [ 1, 3, 4, 1234, 1233 ]
