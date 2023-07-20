function minInArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input is not a non-empty array.");
    }
  
    let minVal = arr[0]; // 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minVal) {
        minVal = arr[i];
      }
    }
  
    return minVal;
  }

const arr = [3, 5, 1, 7, 2];
const result = minInArray(arr);
console.log(result);

  