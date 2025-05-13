class Node <T> {
    value:T;
    next : Node <T> | null;

    constructor(value:T){
        this.value = value;
        this.next = null
    }

}

function insert_at_tail(head_container:{head:Node<number> | null},value:number){
    if (head_container["head"] === null){
        head_container["head"] = new Node<number>(value)
        return 
    }

    let temp = head_container["head"]

    while (temp.next != null){
        temp = temp.next
    }
    temp.next = new Node<number>(value)
}

function print(head_container:{head:Node<number> | null}){
    let temp = head_container["head"]

    while (temp != null){
        process.stdout.write(temp.value + " ")
        temp = temp.next ;
    }
    console.log()

}

const head_container = {head:null}
insert_at_tail(head_container,1)
insert_at_tail(head_container,2)
insert_at_tail(head_container,3)
insert_at_tail(head_container,4)
insert_at_tail(head_container,5)
insert_at_tail(head_container,6)

print(head_container)