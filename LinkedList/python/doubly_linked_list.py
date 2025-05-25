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
        if self.head == None:
            self.head = newNode
            self.tail = newNode
            return
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

    def delete_head(self):
        deleteNode = self.head 
        if self.head.next != None:
            self.head.next.prev = None
            self.head = self.head.next
            del deleteNode
            return

        self.head = self.head.next
        del deleteNode
        return
    
    def delete_tail(self):
        deleteNode = self.tail
        if self.tail.prev != None:
            self.tail.prev.next = None
            self.tail = self.tail.prev
            del deleteNode
            return
        self.tail = self.tail.prev
        del deleteNode
        return

            
    def delete_at_any(self,index):
        temp = self.head
        if temp == None:
            return
        if index == 0:
            self.delete_head()
        
        for i in range(1,index):
            temp = temp.next
            if temp is None:
                print("invalid index!")
                return
        if temp.next == None:
            print('invalid index')
            return
        if temp.next.next == None:
            self.delete_tail()
            return

        deleteNode = temp.next
        temp.next = temp.next.next
        temp.next.next.prev = temp
        del deleteNode
        return

    

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
newDoublyLinkedList.insert_at_any(578,3)
newDoublyLinkedList.insert_at_any(100,4)
newDoublyLinkedList.insert_at_any(1067,5)


# newDoublyLinkedList.insert_at_any(100,11)
# newDoublyLinkedList.insert_at_any(100,10)
# newDoublyLinkedList.insert_at_any(100,12)
# print(newDoublyLinkedList.tail.value)
newDoublyLinkedList.delete_head()
newDoublyLinkedList.delete_tail()
newDoublyLinkedList.delete_at_any(0)
newDoublyLinkedList.print_node()