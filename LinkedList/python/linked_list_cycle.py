# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        slow = head
        first = head
        flag =False
        while first != None and first.next != None:
            slow = slow.next
            first = first.next.next
            if slow == first:
                flag =True
                break
        return flag
