class Solution(object):
    def searchInsert(self, nums, target):
        left = 0
        right = len(nums) - 1
        ans = 0
        while left<=right:
            mid = (left+right)//2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        if ans == 0:
            nums.append(target)
            nums.sort()

            return (nums.index(target))
            