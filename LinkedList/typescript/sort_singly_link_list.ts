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

function print_node(head_container:{head:Node<number>|null}){
    let temp:Node<number> | null = head_container["head"]
    while (temp!=null){
        process.stdout.write(temp.value + " ")
        temp=temp.next
    }
    console.log()
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
    print_node(head_container)
    for (let ii = head_container["head"] as Node<number> | null;ii!=null && ii.next!=null;ii=ii.next){
        for(let jj = ii.next as Node<number> | null;jj!=null;jj=jj.next){
            if(ii.value > jj.value){
                const temp:number = ii.value
                ii.value = jj.value
                jj.value = temp
            }
        }
    }
    print_node(head_container)
})

