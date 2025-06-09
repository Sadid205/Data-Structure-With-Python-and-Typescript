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
    prev: Node<T> | null
    val : T
    next: Node<T> | null
    constructor(val:T){
        this.prev = null
        this.val  = val
        this.next = null
    }
}

class Stack<T>{
    sz:number
    head:Node<T> | null
    tail:Node<T> | null
    constructor(){
        this.sz = 0
        this.head = null
        this.tail = null
    }

    top():T|undefined{
        return this.tail?.val
    }

    pop():void{
        if (this.tail === null){
            return
        }
        this.tail = this.tail.prev
        if (this.tail!=null){
            this.tail.next = null
        }
        this.sz--
    }
    push(val:T):void{
        const newNode = new Node(val)
        if(this.head===null){
            this.head = newNode
            this.tail = newNode
            this.sz++
            return
        }
        if(this.tail){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.sz++
        }
    }

    size():number{
        return this.sz
    }

    isEmpty():boolean{
        return this.sz==0
    }
}

const stack = new Stack<number>()
rl.on("close",()=>{
    const a = input_data.split(" ").map(Number)
    let i = 0;
    while(true){
        if(a[i]===-1){
            break
        }else{
            stack.push(a[i])
        }
        i++
    }
    while(!stack.isEmpty()){
        process.stdout.write(stack.top() +  " ")
        stack.pop()
    }
    console.log()
})
