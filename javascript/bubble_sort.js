function bubbleSort(arr) {
  // type your code here
  let i = 0

  while (i < arr.length-1){
    if(arr[i] > arr[i+1])
    {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      console.log(arr)
    }
    i++
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// two pointers
// [i], [i+1]

// if empty return array

