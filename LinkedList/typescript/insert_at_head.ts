class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value:T){
        this.value = value;
        this.next = null
    }
}

function insert_at_head(head_container:{head:Node<number>|null},value:number){
    const newNode = new Node(value)
    let temp:Node<number> | null = head_container["head"]

    if (temp == null){
        head_container["head"] = newNode
        return 
    }
    newNode.next = temp
    head_container["head"] = newNode
}

function print_node(head_container:{head:Node<number> | null}){
    let temp = head_container["head"]
    while (temp != null){
        process.stdout.write(temp.value + " ")
        temp = temp.next
    }
    console.log()
}

let head_container = {head:null}
insert_at_head(head_container,1)
insert_at_head(head_container,2)
insert_at_head(head_container,3)
insert_at_head(head_container,4)
insert_at_head(head_container,5)
print_node(head_container)