def solution(numbers, target):
    # 트리 형태
    answer = [0]
    # 루트 노드 0에서 +,  -를 이진트리로 만듦
    for number in numbers :
        temp = []
        for j in answer :
            temp.append(j+number)
            temp.append(j-number)
        answer = temp
    # answer에 있는 target 개수 반환
    return answer.count(target)