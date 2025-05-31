
//   Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

let head_container:{"head":ListNode|null} = {"head":null}

function reverse(head:ListNode | null,curr:ListNode | null){
    if(curr?.next === null){
        head_container["head"] = curr
        return
    }
    if(curr!=null){
        reverse(head,curr?.next)
        curr.next.next = curr
        curr.next = null
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    head_container["head"] = head
    if (head_container["head"]===null){
        return head
    }
    reverse(head_container["head"],head_container["head"])
    return head_container["head"]
};