function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort(function(a, b) {
    return a - b;
  });
  
  // Initialize variables to store the closest sum and its difference from the target
  var closestSum = Infinity;
  var closestDiff = Infinity;
  
  // Loop through the array from the first element up to the third-to-last element
  for (var i = 0; i < S.length - 2; i++) {
    // Initialize pointers to the elements to the right of the current element
    var j = i + 1;
    var k = S.length - 1;
    
    // Loop through the remaining elements using the two pointers
    while (j < k) {
      // Calculate the sum of the three elements
      var sum = S[i] + S[j] + S[k];
      
      // Calculate the difference between the sum and the target
      var diff = Math.abs(sum - target);
      
      // Update the closest sum and difference if the current sum is closer to the target
      if (diff < closestDiff) {
        closestSum = sum;
        closestDiff = diff;
      }
      
      // Move the pointers towards each other based on the current sum's relation to the target
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        // If the sum is equal to the target, we have found the solution
        return closestSum;
      }
    }
  }
  
  // Return the closest sum found
  return closestSum;

	// write your code here
  
}

module.exports = threeSum;
