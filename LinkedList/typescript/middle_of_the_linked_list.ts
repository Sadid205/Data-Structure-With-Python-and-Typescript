/**
 * Definition for singly-linked list.
*/
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//        this.val = (val===undefined ? 0 : val)
//        this.next = (next===undefined ? null : next)
//      }
// }
// function size(head:ListNode|null):number{
//     let temp = head
//     let length:number = 0
//     while (temp!=null){
//         length++
//         temp = temp.next
//     }
//     return length
// }
// function middleNode(head: ListNode | null): ListNode | null {
//     const half = Math.trunc(size(head)/2)
//     let temp:ListNode|null = head
//     for(let i:number=0;i!=half;i++){
//         if(temp!=null){
//             temp = temp?.next
//         }
//     }
//     return temp
// };
// Another approach.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
     }
}

function middleNode(head: ListNode | null): ListNode | null {
    
    let slow:ListNode|null = head
    let first:ListNode|null = head
    while (first!=null && first.next!=null && slow!=null){
        slow = slow.next
        first = first.next.next
    }
    return slow
};