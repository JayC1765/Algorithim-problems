/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

const longestConsecutive = (nums) => {
  if (!nums || nums.length === 0) return 0;

  const numsSet = new Set(nums);
  let max = 0;

  for (let num of nums) {
    // to start from beginning of sequence
    if (numsSet.has(num - 1)) continue;

    let currMax = 1;
    let currNum = num;

    while (numsSet.has(currNum + 1)) {
      currMax++;
      currNum++;
    }
    max = Math.max(max, currMax);
  }

  return max;
};
