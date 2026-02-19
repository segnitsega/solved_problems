var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB;
    let set = new Set();
    if(!p1.next || !p2.next){
        if(p1 === p2) return p1
        if(p1.next === p2) return p2;
        if(p2.next === p1) return p1;
        return null
    };
    
    while(p1 || p2){
        if(p1){
            if(set.has(p1)) return p1;
            set.add(p1);
            p1 = p1.next;
        } if(p2){
            if(set.has(p2)) return p2;
            set.add(p2);
            p2 = p2.next;
        }
    }
    return null
};