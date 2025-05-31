# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    head_container = {"head":None}
    def reverse(self,head,curr):
        if curr.next == None:
            self.head_container["head"] = curr
            return
        self.reverse(head=head,curr=curr.next)
        curr.next.next = curr
        curr.next = None 
    def reverseList(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if head==None:
            return head
        self.head_container["head"] = head
        self.reverse(head=self.head_container["head"],curr=self.head_container["head"])
        return self.head_container["head"]