var hasCycle = function(head) {
    let hare = head, tortoise = head;
    if(!head) return false;
    while(true){
        tortoise = tortoise.next;
        hare = hare.next;
        if(hare === null || hare.next === null){
            return false;
        } else{
            hare = hare.next;
        }
        if(hare === tortoise) return true;
    }
    
    // let p1 = head, p2 = hare;
    // while(p1 !== p2){
    //     p1 = p1.next;
    //     p2 = p2.next;
    // }
    // return p1;
};