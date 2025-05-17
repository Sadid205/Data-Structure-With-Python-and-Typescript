import sys
class Node:
    value = None
    next = None
    def __init__(self,value):
        self.value = value
        self.next = None



def insert_at_tail(head_container,value):
    temp = head_container["head"]
    newNode = Node(value)
    if temp == None:
        head_container["head"] = newNode
        return 

    while temp.next is not None:
        temp = temp.next
    
    temp.next = newNode

def print_node(head_container):
    temp = head_container["head"]
    while temp != None:
        print(temp.value,end=" ")
        temp = temp.next

head_container = {"head":None}
input_data = sys.stdin.read().strip().split()
a = list(map(int,input_data))
print(a)
i=0
while True:
    if a[i] != -1:
        insert_at_tail(head_container,a[i])
    else :
        break
    i+=1
print_node(head_container)


    

