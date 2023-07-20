function oddArray(arr) {
    // Use the filter method to create a new array with only the odd elements
    const oddElements = arr.filter((element) => element % 2 !== 0);
  
    return oddElements;
  }
  const myArray = [1, 2, 3, 4, 5, 6, 7];
  const oddElementsArray = oddArray(myArray);
  console.log(oddElementsArray); // Output: [1, 3, 5, 7]
    