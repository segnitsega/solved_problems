var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let p = 0;
  while (p < s.length) {
    let subStr = {};
    let length = 0;
    for (let i = p; i < s.length; i++) {
      if (!subStr[s[i]]) {
        subStr[s[i]] = true;
        length++;
        maxLen = Math.max(length, maxLen);
      } else {
        break;
      }
    }
    p++;
  }
  return maxLen;
};