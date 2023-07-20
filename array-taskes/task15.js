function removeFromArray(arr, elementToRemove) {
   
    const indexToRemove = arr.indexOf(elementToRemove);
  
    if (indexToRemove !== -1) {
      arr.splice(indexToRemove, 1);
    }
  
    // Return the modified array
    return arr;
  }
  const myArray = [1, 2, 3, 4, 5];
  const elementToRemove = 3;
  
  const newArray = removeFromArray(myArray, elementToRemove);
  console.log(newArray); 
    