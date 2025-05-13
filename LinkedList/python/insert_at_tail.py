
class Node:
    value = None
    next = None
    def __init__(self,value):
        self.value = value
        self.next = None


def insert_at_tail(head_container,value):
    if head_container['head']==None:
        head_container['head'] = Node(value=value)
        return 

    temp = head_container["head"]
    while temp.next is not None:
        temp = temp.next

    temp.next = Node(value=value)
    

def print_linked_list(head_container):

    temp = head_container["head"]
    while temp is not None:
        print(temp.value,end=" ")
        temp=temp.next


headContainer = {"head":None}
insert_at_tail(head_container=headContainer,value=1)
insert_at_tail(head_container=headContainer,value=2)
insert_at_tail(head_container=headContainer,value=3)
insert_at_tail(head_container=headContainer,value=4)

print_linked_list(head_container=headContainer)