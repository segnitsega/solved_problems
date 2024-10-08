def longestCommonPrefix(List):
        List.sort()
        first, last = List[0], List[-1]
        i = 0
        while i < len(first) and i < len(last) and first[i] == last[i]:
           i += 1
        return first[:i]

strs = ["Sagni", "Samson", "samire","Samri"]
prefix = longestCommonPrefix(strs)
print(prefix)

print('hekko')

# def longestCommonPrefix(strs):
#     strs.sort()  # Sort the input list
#     first, last = strs[0], strs[-1]  # Get the first and last elements after sorting
#     i = 0
#     while i < len(first) and i < len(last) and first[i] == last[i]:
#         i += 1
#     return first[:i]

# strs = ["Sagni", "Samson", "samire", "Samri"]
# prefix = longestCommonPrefix(strs)
# print(prefix)
