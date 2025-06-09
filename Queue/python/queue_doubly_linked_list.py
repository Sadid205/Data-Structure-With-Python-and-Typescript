import sys
class Node:
    def __init__(self,val):
        self.prev = None
        self.val  = val
        self.next = None

class Queue:
    def __init__(self):
        self.sz = -1
        self.head = None
        self.tail = None
    
    def front(self):
        return self.head.val if self.head != None else None

    def pop(self):
        if self.head == None:
            return
        delete_node = self.head
        self.head = self.head.next
        if self.head != None:
            self.head.prev = None
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
queue = Queue()
i = 0
while True:
    if a[i]==-1:
        break
    else:
        queue.push(a[i])
    i+=1
while not queue.isEmpty():
    print(queue.front(),end=" ")
    queue.pop()





