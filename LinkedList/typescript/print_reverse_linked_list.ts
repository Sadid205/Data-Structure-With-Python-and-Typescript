import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin
})

let input_data:string=""

rl.on('line',(line)=>{
    input_data+=line
})

class Node<T>{
    value:T;
    next:Node<T> | null

    constructor(value:T){
        this.value = value,
        this.next = null
    }
}

function insert_at_tail(head_container:{head:Node<number> | null},value:number){
    const newNode = new Node(value)
    let temp:Node<number> | null = head_container["head"]
    if (temp === null){
        head_container["head"] = newNode
        return 
    }
    while (temp.next !=null ){
        temp=temp?.next
    }
    temp.next = newNode
}

function print_node_reverse(head:Node<number>|null){
    let temp:Node<number> | null = head
    if (temp === null){
        return 
    }
    print_node_reverse(temp.next)
    process.stdout.write(temp.value + " ")
}

function print_node(head_container:{head:Node<number>|null}){
    let temp:Node<number> | null = head_container["head"]
    while (temp!=null){
        process.stdout.write(temp.value + " ")
        temp=temp.next
    }
    console.log()
}

function print_reverse(head_container:{head:Node<number>|null},curr:Node<number> | null){
    if (curr?.next === null){
        head_container["head"] = curr
        return
    }
    if(curr?.next !=null ){
        print_reverse(head_container,curr?.next)
        curr.next.next = curr
        curr.next = null
    }
}

let head_container = {"head":null}

rl.on('close',()=>{
    const a = input_data.split(" ").map(Number)
    let i = 0
    while (true){
        if(a[i]!=-1){
            insert_at_tail(head_container,a[i])
        }else{
            break
        }
        i++
    }
    // print_node_reverse(head_container["head"])
    print_reverse(head_container,head_container["head"])
    print_node(head_container)
    console.log()
})

