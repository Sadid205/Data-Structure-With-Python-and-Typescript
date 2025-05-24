import sys
class Node:
    def __init__(self,value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self,head):
        self.head = head
        self.tail = head
    
    def print_node(self):
        temp = self.head
        while temp != None:
            print(temp.value,end=" ")
            temp = temp.next

    def insert_at_tail(self,value):
        print("tail")
        newNode = Node(value)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
            return
        newNode.prev = self.tail
        self.tail.next = newNode
        self.tail = newNode
    
    def insert_at_head(self,value):
        newNode = Node(value)
        newNode.next = self.head
        self.head.prev = newNode
        self.head = newNode
        
    def insert_at_any(self,value,index):
        temp = self.head
        newNode = Node(value)

        if self.head == None:
            self.head = newNode
            self.tail = newNode
            return

        if index == 0:
            self.insert_at_head(value)
            return

        for i in range(1,index):
            temp = temp.next
            if temp is None:
                print("invalid index!")
                return

        if temp.next == None:
            self.insert_at_tail(value)
            return
        newNode.next = temp.next
        newNode.prev = temp
        temp.next.prev = newNode
        temp.next = newNode
    

head_container = {"head":None}
newDoublyLinkedList = DoublyLinkedList(head_container["head"])

input_data = sys.stdin.read().strip().split()
a = list(map(int,input_data))
i = 0
while True:
    if a[i] != -1:
        newDoublyLinkedList.insert_at_tail(a[i])
    else:
        break
    i+=1
# newDoublyLinkedList.print_node()
newDoublyLinkedList.insert_at_head(10)
newDoublyLinkedList.insert_at_any(578,4)
# newDoublyLinkedList.insert_at_any(100,5)
# newDoublyLinkedList.insert_at_any(100,6)


# newDoublyLinkedList.insert_at_any(100,11)
# newDoublyLinkedList.insert_at_any(100,10)
# newDoublyLinkedList.insert_at_any(100,12)
newDoublyLinkedList.print_node()
# print(newDoublyLinkedList.tail.value)