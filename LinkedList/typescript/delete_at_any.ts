class Node<T> {
    value:T
    next:Node<T> | null

    constructor(value:T){
        this.value = value;
        this.next = null
    }
}

function insert_at_any(head_container:{head:Node<number>|null},index:number,value:number){
    let temp:Node<number> | null = head_container["head"]
    const newNode = new Node<number>(value)
    if (temp === null){
        head_container["head"] = newNode
        return 
    }
    if (index===0){
        newNode.next = head_container["head"]
        head_container["head"] = newNode
        return 
    }
    for (let i:number=1;i<=index-1;i++){
       if (temp!=null){
            temp = temp.next
       }else{
        console.log("invalid index!")
        return 
       }
    }
    if (temp!=null){
        newNode.next = temp.next
        temp.next = newNode
    }
}

function delete_at_any(head_container:{head:Node<number>|null},index:number){
    let temp = head_container["head"]
    if (index===0 && temp!=null){
        head_container["head"] = temp.next
        return 
    }
    for (let i:number=0;i<index-1;i++){
        if(temp!=null){
            temp=temp.next
        }else{
            console.log("invalid index!")
        return 
       }
    }
    if (temp != null && temp.next!=null){
        temp.next = temp.next.next
    }
}

function print_node(head_container:{head:Node<number> | null}){
    let temp = head_container["head"]
    while (temp!=null){
        process.stdout.write(temp.value + " ")
        temp = temp.next
    }
    console.log()
}

const head_container = {head:null}
insert_at_any(head_container,0,1)
insert_at_any(head_container,1,2)
insert_at_any(head_container,2,3)
insert_at_any(head_container,3,4)
insert_at_any(head_container,4,5)
insert_at_any(head_container,5,6)
insert_at_any(head_container,6,7)
insert_at_any(head_container,0,10)
delete_at_any(head_container,0)
delete_at_any(head_container,6)
delete_at_any(head_container,2)
delete_at_any(head_container,44)
print_node(head_container)

