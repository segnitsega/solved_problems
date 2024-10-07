class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        if ( n % 2 == 0 ):
            smallest_multiple = n
        else:
            smallest_multiple = n * 2
        return smallest_multiple