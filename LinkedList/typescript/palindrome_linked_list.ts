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

function isPalindrome(head: ListNode | null): boolean {
    let slow = head
    let fast = head
    while (fast!=null && fast.next!=null && slow!=null){
        slow = slow?.next
        fast = fast.next.next
    }
    let prev:ListNode|null = null
    while(slow!=null){
        const next_node = slow.next
        slow.next = prev
        prev = slow
        slow = next_node
    }
    let left:ListNode|null = head
    let right:ListNode|null = prev
    while(left!=null && right!=null){
        if(left.val!=right.val){
            return false
        }
        left = left.next
        right = right.next
    }
    return true
};