function solution(arr) {
    const len = arr.length;
    let targetLen = 1;
    while (true) {
        if (len <= targetLen) break;
        targetLen *= 2;
    }
    return arr.concat(Array(targetLen - len).fill(0));
}