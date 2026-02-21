var isValid = function(s) {
    const map = {
        "}": "{",
        ")": "(",
        "]": "["
    } 
    let stack = [];
    for(let char of s){
        if(!map[char]) stack.push(char);
        else {
            const topChar = stack.pop();
            if(map[char] !== topChar) return false;
        }
    }
    
    return stack.length === 0;
};