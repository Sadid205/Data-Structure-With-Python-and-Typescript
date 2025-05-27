/**
 * Definition for singly-linked list.
*/
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head===null){
        return head
    }
    let temp = head
    while(temp.next!=null){
        if(temp.val===temp.next.val){
            temp.next = temp.next.next
        }
        if(temp.next==null){
            break
        }else if (temp.val!=temp.next.val){
            temp = temp.next
        }

    }
    return head
};