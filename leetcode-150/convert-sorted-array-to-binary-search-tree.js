function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
}

/*

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

const sortedArrayToBST = (nums) => {
  if (!nums) return null;

  const midIdx = Math.floor(nums.length / 2);
  const mid = new TreeNode(nums[midIdx]);

  mid.left = sortedArrayToBST(nums.slice(0, midIdx));
  mid.right = sortedArrayToBST(nums.slice(midIdx + 1, nums.length));

  return mid;
};
