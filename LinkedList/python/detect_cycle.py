

class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

head = Node(10)
b = Node(22)
c = Node(56)

head.next = b
b.next = c
c.next = head

slow = head
first = head
flag = False

while first!=None and first.next!=None:
    slow = slow.next
    first = first.next.next
    if slow == first:
        flag = True
        break
if flag==True:
    print("Cycle Detected!")
else:
    print("No Cycle")
