var findMaxAverage = function(nums, k) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0] / k;

  let p1 = 0;
  let maxAvg = -Infinity;
  while (p1 <= nums.length - k) {
    let p2 = p1 + k;
    let sum = 0;
    let currentAvg = 0;
    for (let i = p1; i < p2; i++) {
      sum += nums[i];
    }
    currentAvg = sum / k;
    maxAvg = Math.max(maxAvg, currentAvg);
    p1++;
  }
  return maxAvg;
};
