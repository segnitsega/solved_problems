if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

def runner_up(arr, n):
    scores = list(arr)
    scores.sort()
    count = 1
    if n == 1:
        return "No runner-up"
    if n == 2:
        if scores[0] == scores[-1]:
            score = "No runner-up"
        else:
            score = scores[0]
    if n > 2:
        for i in range(n):
            if scores[n-2] == scores[n-1]:
                count += 1
                n -= 1
                if scores[n-2] < scores[n-1]:
                    score = scores[n-2]
                    break
            elif scores[-2] < scores[-1]:
                score = scores[-count]
    return score

check = runner_up(arr, n)
print(check)
