class Node :
    value = None
    next = None
    
    def __init__(self,value):
        self.value = value
        self.next = None


def insert_at_head(head_container,value):
    newNode = Node(value)
    temp = head_container["head"]
    if temp is None:
        head_container["head"] = newNode
        return 

    newNode.next = temp
    head_container["head"] = newNode

def print_node(head_container):
    temp = head_container["head"]

    while temp!=None:
        print(temp.value,end=" ")
        temp=temp.next

head_container = {"head":None}
insert_at_head(head_container,1)
insert_at_head(head_container,2)
insert_at_head(head_container,3)
print_node(head_container)
