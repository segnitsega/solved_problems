var lengthOfLongestSubstring = function(s) {
  let subStr = [];
  let maxLen = 0;
  let p = 0;
  while (p < s.length) {
    subStr.push(s[p]);
    maxLen = Math.max(maxLen, subStr.length);
    for (let i = p + 1; i < s.length; i++) {
      if (subStr.indexOf(s[i]) === -1) {
        subStr.push(s[i]);
        maxLen = Math.max(maxLen, subStr.length);
      } else {
        i = s.length;
        subStr = [];
      }
    }
    p++;
    subStr = [];
  }
  return maxLen;
};