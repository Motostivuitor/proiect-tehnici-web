let array = [1,2,3,5,9,7];
let array2 = [21,23,29];
let array3 = [16,17];

array.push(6);

console.log(array);

array.pop();
array.push(4,5);
array.pop();
array.pop();
array.pop();

console.log(array);

let result = array3.concat(array,array2);

console.log(result);