import * as readline from 'readline'
const rl = readline.createInterface({
    input:process.stdin
})
let input_data:string = ""
rl.on("line",(line)=>{
    input_data+=line
    if(line.includes("-1")){
        rl.close()
    }
})

class Node<T>{
    prev:Node<T>|null
    val:T
    next:Node<T>|null
    constructor(val:T){
        this.prev = null
        this.val = val
        this.next = null
    }
}

class Queue<T>{
    sz:number
    head:Node<T>|null
    tail:Node<T>|null
    constructor(){
        this.sz = 0
        this.head = null
        this.tail = null
    }
    front():T|undefined{
        return this.head?.val
    }

    pop(){
        if (this.head===null){
            return
        }
        this.head = this.head.next
        if(this.head!=null){
            this.head.prev = null
        }
        this.sz--
    }

    push(val:T){
        const newNode = new Node(val)
        if(this.head===null){
            this.head = newNode
            this.tail = newNode
            this.sz++
            return
        }
        if (this.tail){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.sz++
        }
    }
    size(){
        return this.sz
    }
    isEmpty(){
        return this.size()===0
    }
}

const queue = new Queue<number>()
rl.on("close",()=>{
    const a = input_data.split(" ").map(Number)
    let i = 0;
    while(true){
        if(a[i]===-1){
            break
        }else{
            queue.push(a[i])
        }
        i++
    }
    while(!queue.isEmpty()){
        process.stdout.write(queue.front() +  " ")
        queue.pop()
    }
    console.log()
})


