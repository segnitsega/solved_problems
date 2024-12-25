class Solution(object):
    def findMin(self, nums):
        l, r = 0, len(nums) - 1
        result = nums[l]
        while l <= r:
            if nums[l] < nums[r]:
                result = min(result, nums[l])
                break
            mid = (l + r) // 2
            result = min(result, nums[mid])
            if nums[mid] >= nums[l]:
                l = mid + 1
            else:
                r = mid - 1
        return result
            