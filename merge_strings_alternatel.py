class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i, j = 1, 0
        result = []
        result.append(word1[0])
        
        while i < len(word1) or j < len(word2):
            if i > j:
                if j < len(word2):
                    result.append(word2[j])
                    j += 1
                else:
                    result.extend(word1[i:])
                    return(''.join(result))

            elif i==j:
                if i < len(word1):
                    result.append(word1[i])
                    i += 1
                else:
                    result.extend(word2[j:])
                    return(''.join(result))      
        return(''.join(result))