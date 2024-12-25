class Solution(object):
    def isPerfectSquare(self, x):
        left = 1
        right = x - 1
        ans = 0
        if x < 2:
            return True
        while left <= right:
            mid = (right + left) / 2
            if mid * mid == x:
                return True
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1
        if ans == 0:
            return False