var backspaceCompare = function(s, t) {
  let n1 = 0;
  let n2 = 0;
  let p1 = s.length - 1;
  let p2 = t.length - 1;
  if (s[p1] !== "#" && t[p2] !== "#") {
    if (s[p1] !== t[p2]) return false;
  }

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] !== "#" && t[p2] !== "#") {
      if (n1 === 0 && n2 === 0) {
        if (s[p1] !== t[p2]) return false;
        p1--;
        p2--;
      } else if (n1 > 0 && n2 > 0) {
        p1--;
        n1--;
        p2--;
        n2--;
      } else if (n1 > 0) {
        p1--;
        n1--;
      } else if (n2 > 0) {
        p2--;
        n2--;
      }
    } else if (s[p1] === "#") {
      n1 += 2;
      p1--;
      n1--;
    } else if (t[p2] === "#") {
      n2 += 2;
      p2--;
      n2--;
    }
  }
  return true;
};
