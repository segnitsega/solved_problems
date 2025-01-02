class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        result = nums[0]
        for n in nums:
            if abs(n) < abs(result):
                result = n
            elif abs(n) == abs(result):
                if n > result:
                    result = n
            else:
                continue
        return result