function solution(dots) {
    let answer = 0;
    const total = [0,1,2,3]
    const arr = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]
    for(let i of arr){
        const rest = total.filter((x)=>!i.includes(x))
        const first = (dots[i[0]][1] - dots[i[1]][1]) / (dots[i[0]][0]-dots[i[1]][0])
        const second = (dots[rest[0]][1] - dots[rest[1]][1]) / (dots[rest[0]][0]-dots[rest[1]][0])
        if(first === second) answer =1
    }
    return answer;
}