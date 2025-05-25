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
    insert_at_tail(value:T){
        const newNode = new Node(value)
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.prev = this.tail
        if (this.tail!=null && this.tail.next != null){
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
        if(this.head!=null && this.head.prev != null){
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

}