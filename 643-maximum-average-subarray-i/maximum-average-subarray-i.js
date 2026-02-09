var findMaxAverage = function(nums, k) {
  if(nums.length === 0) return 0;
  if (nums.length === 1) return nums[0]/k; 
  let sum = 0;
  let maxAvg = -Infinity;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let currentAvg = sum / k;
  maxAvg = currentAvg;

  let p = 1;
  while (p <= nums.length - k) {
    sum = sum - nums[p - 1] + nums[p + k - 1];
    currentAvg = sum / k;
    maxAvg = Math.max(currentAvg, maxAvg);
    p++;
  }
  return maxAvg;
};
