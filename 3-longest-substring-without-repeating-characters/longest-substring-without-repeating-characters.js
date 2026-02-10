var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = l;
    let longest = 0;
    let map = {};
    while(r < s.length){
         if(!(s[r] in map)){
            map[s[r]] = r;
            longest = Math.max(longest, r - l + 1);
         } else{
            l = Math.max(l, map[s[r]] + 1);
            map[s[r]] = r;
            longest = Math.max(longest, r - l + 1);
         }
        r++;
    }
    return longest;
};