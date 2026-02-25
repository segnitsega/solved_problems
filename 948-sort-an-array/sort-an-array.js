function mergeSort(num1, num2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  while (p1 < num1.length && p2 < num2.length) {
    if (num1[p1] < num2[p2]) {
      result.push(num1[p1]);
      p1++;
    } else {
      result.push(num2[p2]);
      p2++;
    }
  }

  while (p1 < num1.length) {
    result.push(num1[p1]);
    p1++;
  }

  while (p2 < num2.length) {
    result.push(num2[p2]);
    p2++;
  }

  return result;
}

var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    let leftSide = sortArray(nums.slice(0, mid)); 
    let rightSide = sortArray(nums.slice(mid)); 
    
    return mergeSort(leftSide, rightSide);

};