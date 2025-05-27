# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if (head==None):
            return head
        temp = head
        while(temp.next!=None):
            if temp.val==temp.next.val:
                temp.next = temp.next.next
            if temp.next==None:
                break
            elif temp.val!=temp.next.val:
                temp = temp.next
        return head