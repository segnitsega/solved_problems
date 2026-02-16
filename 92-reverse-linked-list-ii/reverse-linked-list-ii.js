var reverseBetween = function (head, l, r) {
    if(!head || !head.next || l === r) return head;
    let current = head, next = null, prev = null, leftPrev = null, tail = null, position = 1;
    
    while(current){
        if(position === l - 1) leftPrev = current;
        next = current.next;
            if(position === l){
                // leftPrev = prev;
                tail = current
                while(position <= r){
                    next = current.next;
                    current.next = prev;
                    prev = current;
                    current = next;
                    position++;            
                }
                tail.next = current;
                // head.next ? head.next = prev : head.next = null;
                leftPrev ? leftPrev.next = prev : "";
                // return head.next ? head : prev;
                return leftPrev ? head : prev;
            }
        
        current = next;
        position++;
    }
};
