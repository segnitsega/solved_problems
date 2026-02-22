class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
        this.currentMin = Infinity;
    }

    push(val){
        this.stack.push(val);
        if(this.currentMin < val) this.minStack.push(this.currentMin);
        else {
            this.minStack.push(val); 
            this.currentMin = val;
        }
    } 

    pop(){
        this.stack.pop();
        this.minStack.pop();
        this.currentMin = this.minStack.length ? this.minStack[this.minStack.length - 1] : Infinity;
    }

    top(){
        const top = this.stack[this.stack.length - 1];
        return top;
    } 

    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}