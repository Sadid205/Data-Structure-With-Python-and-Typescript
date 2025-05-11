
class Node <T> {
    val:T;
    next:Node<T> | null

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

let temp:Node<number> | null = head
while (temp != null){
    process.stdout.write(temp.val + " ")
    temp = temp.next
}
process.stdout.write("\n")