function solution(num, k) {
    let idx = [...num.toString()].findIndex(x => parseInt(x) === k);
    return idx === -1 ? -1 : idx + 1;
}