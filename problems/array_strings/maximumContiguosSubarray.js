/**
 * https://leetcode.com/problems/maximum-subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    A subarray is a contiguous part of an array.
    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
 */
 

function maxSubArray(arr) {
    let max_sum = arr[0],
        curr_sum = max_sum; 
    for (let i = 1; i < arr.length; i++) {
        curr_sum = Math.max(arr[i], arr[i] + curr_sum);
        max_sum = Math.max(max_sum, curr_sum);
    }
    return max_sum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))