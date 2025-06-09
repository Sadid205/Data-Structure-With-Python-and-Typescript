import sys
class Node:
    def __init__(self,val):
        self.prev = None
        self.val  = val
        self.next = None

class Stack:
    def __init__(self):
        self.sz = -1
        self.head = None
        self.tail = None
    
    def top(self):
        return self.tail.val if self.tail != None else None

    def pop(self):
        if self.tail == None:
            return
        delete_node = self.tail
        self.tail = self.tail.prev
        if self.tail != None:
            self.tail.next = None
        del delete_node
        self.sz-=1
    
    def push(self,val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
            self.sz+=1
            return
        self.tail.next = newNode
        newNode.prev = self.tail
        self.tail = newNode
        self.sz+=1

    def size(self):
        return self.sz
    
    def isEmpty(self):
        return self.sz==-1

input_data = sys.stdin.read().strip().split(" ")
a = list(map(int,input_data))
stack = Stack()
i = 0
while True:
    if a[i]==-1:
        break
    else:
        stack.push(a[i])
    i+=1
while not stack.isEmpty():
    print(stack.top(),end=" ")
    stack.pop()




