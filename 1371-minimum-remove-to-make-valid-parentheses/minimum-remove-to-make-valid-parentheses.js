var minRemoveToMakeValid = function(s) {
    let stack = [];
    let str = s.split("");
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(") stack.push(i);
        else if (str[i] === ")" && stack.length){
            stack.pop();
        } else if (str[i] === ")"){
            str[i] = "";
        }
    }
 
    if(stack.length){
        for(let i = stack.length-1; i >= 0; i--){
            const top = stack.pop();
            str[top] = "";
        }
    }

    return str.join("");
};