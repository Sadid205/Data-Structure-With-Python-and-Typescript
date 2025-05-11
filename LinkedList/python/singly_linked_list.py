

class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

head = Node(10)
b = Node(22)

head.next = b

temp = head

while temp is not None:
    print(temp.val,end=" ")
    temp=temp.next

