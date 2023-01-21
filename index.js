function hasTargetSum(array, target) {
  // Write your algorithm here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === target) {
        result.push(true);
        break;
      }
    }
  }

  if (result[0] === undefined) return false;
  else return true;
}

/**
 * Write the Big O time complexity of your function here:
 *
 * The time complexity is O(n*n) - quadratic time
 */

/**
 * Add your pseudocode here:
 *
 * Initialize an empty array
 * First time: Loop through the array from the first element till the end
 * Second time: Loop through the array from the second element till the end
 * If the sum of any two numbers of the array equal the target
 * AND if they are not pointing to the same array element, push the boolean value of true into the empty array
 * If there is no such case, do nothing
 * Now examine the result array
 * If the first member is undefined (i.e. if there is nothing in the array), return false
 * Otherwise, return true
 */

/**
 * Add written explanation of your solution here:
 *
 * I had to test with all the sample values
 *
 * let target;
 *
 * arrayExample = [3, 8, 12, 4, 11, 7];
 * target = 10; // [ true ]
 *
 * arrayExample = [22, 19, 4, 6, 30];
 * target = 25; // [ true, true ]
 *
 * arrayExample = [1, 2, 5];
 * target = 4; // []
 *
 * arrayExample = [2, 2, 3, 3];
 * target = 4; // [ true ]
 *
 * console.log(result[0]);
 * let arrayExample;
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
