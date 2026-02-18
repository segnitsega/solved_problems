/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */


var flatten = function(head) {
    if(!head) return head;
    let currentNode = head;
    while(currentNode.next !== null || currentNode.child !== null){
        if(currentNode.child){
            let childNode = currentNode.child;
            while(childNode.next !== null){
                childNode = childNode.next;
            }
            childNode.next = currentNode.next;
            if(currentNode.next) currentNode.next.prev = childNode;
            currentNode.child.prev = currentNode;
            currentNode.next = currentNode.child;
            currentNode.child = null;

            currentNode = currentNode.next;
        } else{
            currentNode = currentNode.next;
        }
    }
    return head;
};