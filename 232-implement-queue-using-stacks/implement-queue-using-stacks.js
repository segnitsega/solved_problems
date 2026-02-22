var MyQueue = function() {
    this.stack = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.stack2.length) {
        for(let i = this.stack.length-1; i >= 0; i--){
            this.stack2.push(this.stack[i]);
            this.stack.pop();
        }
    }
    const val = this.stack2.pop();
    return val;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     if(!this.stack2.length) {
        for(let i = this.stack.length-1; i >= 0; i--){
            this.stack2.push(this.stack[i]);
            this.stack.pop();
        }
    } 
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.stack2.length && !this.stack.length) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */