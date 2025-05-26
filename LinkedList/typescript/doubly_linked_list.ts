import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin
})

let input_data:string = ""

rl.on('line',(line)=>{
    input_data+=line
})

class Node<T>{
    value:T;
    prev:Node<T> | null;
    next:Node<T> | null;

    constructor(value:T){
        this.value = value,
        this.prev = null,
        this.next = null
    }
}

class DoublyLinkedList <T> {
    head:Node<T> | null;
    tail:Node<T> | null;

    constructor(head:Node<T> | null){
        this.head = head,
        this.tail = head
    }

    print_node():void{
        let temp = this.head;
        while (temp != null){
            process.stdout.write(temp.value + " ")
            temp = temp.next
        }
        console.log()
    }
    reverse():void{
        let i = this.head
        let j = this.tail
        while(i && j && i!=j && i?.next!=j){
            const temp = i.value
                i.value = j.value
                j.value = temp
                i = i.next
                j = j.prev
        }
        if(i && j){
            const temp2 = i.value
            i.value = j.value
            j.value = temp2
        }
    }
    

    insert_at_tail(value:T){
        const newNode = new Node(value)
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.prev = this.tail
        if (this.tail!=null){
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    insert_at_head(value:T){
        const newNode = new Node(value)
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.next = this.head
        if(this.head!=null){
            this.head.prev = newNode
            this.head = newNode
            return
        }
        
    }
    insert_at_any(value:T,index:number){
        let temp = this.head
        const newNode = new Node(value)

        if (this.head === null){
            this.head = newNode
            this.tail = newNode
            return
        }
        if (index === 0){
            this.insert_at_head(value)
            return
        }
        for (let i:number = 1;i<index;i++) {
            if(temp!=null){
                temp = temp.next
            }
            if (temp === null){
                console.log("invalid index!")
                return
            }
        }
        if (temp?.next === null){
            this.insert_at_tail(value)
            return
        }
        if(temp!=null && temp.next!=null){
            newNode.next = temp.next
            newNode.prev = temp
            temp.next.prev = newNode
            temp.next = newNode
        }
    }
    delete_head(){
        const delete_node = this.head
        if(this.head?.next != null){
            this.head.next.prev = null
            this.head = this.head.next
            return
        }
        if(this.head!=null){
            this.head = this.head.next
            return
        }
    }
    delete_tail(){
        const deleteNode = this.tail
        if(this.tail?.prev != null){
            this.tail.prev.next = null
            this.tail = this.tail.prev
            return
        }
        if(this.tail!=null){
            this.tail = this.tail.prev
            return
        }
    }
    delete_at_any(index:number){
        let temp = this.head
        if (temp===null){
            console.log("head is null!")
            return
        }
        if(index===0){
            this.delete_head()
            return
        }
        for(let i:number=1;i<index;i++){
            if(temp!=null){
                temp = temp?.next
            }
            if(temp===null){
                console.log('invalid index!')
                return
            }
        }
        if(temp.next==null){
            console.log('invalid index')
            return
        }
        if(temp.next.next === null){
            this.delete_tail()
            return
        }
        if(temp.next.next!=null){
            temp.next.next.prev = temp
            temp.next = temp.next.next
        }
        return
    }
}

let head_container = {"head":null}
const newDoublyLinkedList = new DoublyLinkedList<number>(head_container["head"])

rl.on('close',()=>{
    const a = input_data.split(" ").map(Number)
    let i = 0
    while(true){
        if(a[i]!=-1){
            newDoublyLinkedList.insert_at_tail(a[i])
        }else{
            break
        }
        i++
    }
    console.log(a)
    newDoublyLinkedList.insert_at_tail(3)
    newDoublyLinkedList.insert_at_head(49)
    newDoublyLinkedList.insert_at_any(495,2)
    newDoublyLinkedList.insert_at_any(944,0)
    newDoublyLinkedList.insert_at_any(72,5)
    newDoublyLinkedList.insert_at_any(6734,7)
    newDoublyLinkedList.delete_head()
    newDoublyLinkedList.delete_tail()
    newDoublyLinkedList.delete_at_any(5)
    newDoublyLinkedList.delete_at_any(0)
    newDoublyLinkedList.print_node()
    newDoublyLinkedList.reverse()
    newDoublyLinkedList.print_node()
})
// 5 495 44 72 6734 93
// 93 6734 72 44 495 5