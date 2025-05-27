# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def size(self,head):
        temp = head
        len = 0
        while temp!=None:
            len+=1
            temp = temp.next
        return len

    def middleNode(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        half = (self.size(head)//2)
        temp = head
        i = 0
        while i!=half:
            temp = temp.next
            i+=1

        return temp
        
# another approach . 
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        slow = head
        first = head
        while first!=None and first.next!=None:
            slow = slow.next
            first = first.next.next

        return slow
        