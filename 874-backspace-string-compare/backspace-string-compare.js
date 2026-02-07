var backspaceCompare = function(s, t) {
    let typedS = [];
    let typedT = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] != "#"){
            typedS.push(s[i]);
        } else{
            typedS.pop()
        }
    }
     for(let i = 0; i < t.length; i++){
        if(t[i] != "#"){
            typedT.push(t[i]);
        } else{
            typedT.pop()
        }
    }
    if(typedS.length != typedT.length) return false;
    for(let i = 0; i < typedS.length; i++){
        if(typedS[i] != typedT[i]) return false;
    }
    return true;
};
