def solution(answers) :
    answer = []
    # 수포자들이 찍는 방식
    pick1 = [1, 2, 3, 4, 5]
    pick2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    scores = [0, 0, 0]
    
    # 정답과 수포자의 답을 비교해서 정답이면 점수에 1을 더함
    for index, a in enumerate(answers) :
        # 1번 수포자가 찍는 방식일 경우 점수
        if a == pick1[index % len(pick1)] :
            scores[0] += 1
        # 2번 수포자가 찍는 방식일 경우 점수
        if a == pick2[index % len(pick2)] :
            scores[1] += 1
        # 3번 수포자가 찍는 방식일 경우 점수
        if a == pick3[index % len(pick3)] :
            scores[2] += 1
            
    for index, score in enumerate(scores) :
        # 제일 많이 맞춘 사람
        if score == max(scores) :
            answer.append(index + 1)
    
    return answer