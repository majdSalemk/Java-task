// let myArray = [1, 2, 3, 4, 5];
// let Array = [1, 2, 3, 4, 5];
// console.log(myArray+Array); 
function sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  const myArray = [1, 2, 3, 4, 5];
  const result = sumArray(myArray);
  console.log(result); 
    
