from collections import deque
import sys
class Stack:
    def __init__(self):
        self.stk = deque()
    
    def push(self,val):
        self.stk.append(val)
    
    def pop(self):
        self.stk.pop()

    def top(self):
        return self.stk[-1]
    
    def size(self):
        return len(self.stk)
    
    def isEmpty(self):
        return self.size() == 0
    

input_data = sys.stdin.read().strip().split(" ")
a = list(map(int,input_data))
stack = Stack()
i=0
while True:
    if a[i]==-1:
        break
    else:
        stack.push(a[i])
    i+=1
while not stack.isEmpty():
    print(stack.top(),end=" ")
    stack.pop()

