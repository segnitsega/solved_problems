var isValid = function(s) {
    
    const parentheses = {
        "{": 1,
        "(": 2,
        "[": 3,
        "}": 4,
        ")": 5,
        "]": 6,
    }
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(parentheses[s[i]] <= 3) stack.push(s[i]);
        else {
            const val = stack.pop();
            if(parentheses[val] + 3 !== parentheses[s[i]]) return false;
    }
    }
    if(stack.length > 0) return false;
    return true;
};