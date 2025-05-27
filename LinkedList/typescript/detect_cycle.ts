
class Node <T> {
    val:T;
    next:Node <T> | null

    constructor(val:T){
        this.val = val;
        this.next = null
    }
}

const head = new Node<number>(30)
const a = new Node<number>(44)
const b = new Node<number>(56)

head.next = a
a.next = b
b.next = head

let slow:Node<number> | null = head
let first:Node<number> | null = head
let flag:boolean = false
while(first!=null && first.next!=null && slow!=null){
    slow = slow?.next
    first = first.next.next
    if (slow === first){
        flag = true
        break
    }
}
if(flag===true){
    console.log("Cycle Detected!")
}else{
    console.log("No cycle!")
}