function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through the array with the first number index 0 (then second, third, etc till end of array)
  for (let i = 0; i < array.length; i++){
    //iterate starting the next element index 1, 2, 3...till end of array 
    for (let j = i + 1; j < array.length; j++){
      //add number from outer loop to the number from inner loop
      //keep going through the inner and outer loops and if added numbers is equal to target return true
      //else return false
      if (array[i] + array[j] === target){
        return true
      } 
      }
    }
      return false
}

/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
    // for outer BIG O time = O(n)
    for (let i = 0; i < array.length; i++){
      // for inner BIG O time = O(n)
      for (let j = i + 1; j < array.length; j++){
        // 1 step 
        if (array[i] + array[j] === target){
          return true
        } 
        }
      }
        return false
  }
  BIG O time O(n*n + 1) --> outer iteration dependent on n number of elements in an array and inner iteration depends on n number of elements in an arrray and theres 1 step the conditional check 
  BIG O time O((n^2) +1) --> drop the constant -->  O(n^2)
  BIG O time is O(n^2) --> quadratic time
  Given an input array of n elements, the worst case scenario is that algorithm needs n^2 iterations.

  Big O space complexity   
  O(1) or O(n)

*/

/* 
  Add your pseudocode here
    take an array of numbers
    iterate through the array with the first number index 0 (then second, third, etc till end of array)
    iterate starting the next element index 1, 2, 3...till end of array 
    add number from outer loop to the number from inner loop
    keep going through the inner and outer loops and if added numbers is equal to target return true
    else return false
  
  Rewrite the Problem in Your Own Words
    take an array of numbers and starting at the first element add the first element to each element individually and repeat for the second element and so forth until end of array. if any pairs added equals the target number then stop and return true. if not return false. 
*/

/*
  Add written explanation of your solution here
    function hasTargetSum(array, target) {
      for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === target){
            return true
          }
        }
      }
      return false
    }
    EX: hasTargetSum([1, 2, 3], 4)
    //array and target 
    function hasTargetSum([1, 2, 3], 4) {
      for (let i = 0; i < array.length; i++){
        // [1, 2, 3] i = 0 element at index 0 is 1 
        // first iteration i is 0. 0 is less than array.length = 3
        // if inner loop doesn't return true then we will need i++ (increment i) -> 0+1 = 1. then perform steps again where [1, 2, 3] i = 1 element at index 1 is 2
        // second iteration i is 1. 1 is less than array.length = 3
        //will keep going until either we receive true or end of array is reached and then return false
        for (let j = i + 1; j < array.length; j++){
          // [1, 2, 3] j = i + 1 --> 0+1=1 element at index 1 is 2
          // first iteration j is 1. 1 is less than array.length = 3
          // if the conditional block code below is true then return true. else keep iterating through array. 
          //will keep going until either we receive true or end of array is reached and then return false
          if (array[i] + array[j] === target){
            // adding array[i] to array[j] and checking if it matches the target
            // array[i] + array[j] --> array[0] + array[1] --> 1 + 2 does it equal target 4? nope
            //inner loop moves to the next element for j by incrementing j and checking that j < array.length (in this iteration true)
            // array[i] + array[j+ 1] --> array[0] + array[1+ 1] --> 1 + 3 does it equal target 4? yes it does. return true and stop iterating. 
            return true
          } 
        }
      }
      return false
    }

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /* Write Your Own Test Cases
    ([1, 3, 5, 7], 10) // true
    ([1, 3, 5, 7, 50], 100) // false
  */

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 5, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3, 5, 7, 50], 100));
}

module.exports = hasTargetSum;
