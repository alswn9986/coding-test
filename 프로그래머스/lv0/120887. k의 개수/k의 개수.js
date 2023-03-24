function solution(i, j, k) {
    let cnt = 0;
    for (let a = i; a <= j; a++) {
        cnt = cnt + [...(a.toString())].filter(x => x === k.toString()).length;
    }
    return cnt;
}