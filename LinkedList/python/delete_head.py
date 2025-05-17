
class Node:
    value = None
    next = None
    
    def __init__(self,value):
        self.value = value
        self.next = None


def insert_at_any(head_container,index,value):
    temp = head_container["head"]
    newNode = Node(value)
    
    if temp == None:
        head_container["head"] = newNode
        return
    
    if index == 0:
        newNode.next = temp
        head_container["head"] = newNode
        return 
    
    for i in range(1,index):
        if temp is None:
            print("invalid index!")
            return 
        temp = temp.next
    newNode.next = temp.next
    temp.next = newNode


def delete_head(head_container):
    if head_container["head"] is not None:
        delete_node = head_container["head"]
        head_container["head"] = head_container["head"].next
        del delete_node

def print_node(head_container):
    temp = head_container["head"]
    while temp is not None:
        print(temp.value,end="  ")
        temp=temp.next

head_container = {"head":None}
insert_at_any(head_container,0,1)
insert_at_any(head_container,0,6)
insert_at_any(head_container,2,2)
insert_at_any(head_container,3,3)
insert_at_any(head_container,4,4)
insert_at_any(head_container,5,5)
insert_at_any(head_container,6,6)
insert_at_any(head_container,3,8)
delete_head(head_container)
delete_head(head_container)

print_node(head_container)
