function middleOfArray(arr) {
    const middleIndex = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 1) {
      // Odd number of elements, return the middle element
      return arr[middleIndex];
    } else {
      // Even number of elements, return the two middle elements in an array
      return [arr[middleIndex - 1], arr[middleIndex]];
    }
  }
  let oddArray = [1, 2, 3, 4, 5];
  
  console.log(middleOfArray(oddArray));  
 
    


