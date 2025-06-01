# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
   
    def isPalindrome(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: bool
        """
        slow = fast = head
        while fast!=None and fast.next!=None:
            slow = slow.next
            fast = fast.next.next
        prev = None
        while slow!=None:
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node
        left = head
        right = prev
        while left!=None and right!=None:
            if left.val!=right.val:
                return False
            left = left.next
            right = right.next
        return True        

        