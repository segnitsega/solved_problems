var lengthOfLongestSubstring = function(s) {
  let p = 0;
  let subStr = {};
  let maxLen = 0;
  let length = 0;
  while (p < s.length) {
    if (!subStr[s[p]]) {
     subStr[s[p]] = true;
     length++;
     maxLen = Math.max(maxLen, length);
     p++;
    } else {
      subStr = {};
      p = p - length + 1;
      length = 0;
    }
  }
  return maxLen;
};