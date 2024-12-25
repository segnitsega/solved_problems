class Solution(object):
    def mySqrt(self, x):
        if x < 2:
            return x
        left, right = 0, x - 1
        while left <= right:
            mid = (right + left) / 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1
        return right
        