function solution(n) {
    let arr = [];
    while(true) {
        arr.push(n);
        if (n === 1)    break;
        if (n % 2) {
            n = 3 * n + 1;
        } else {
            n = n / 2;
        }
    }
    return arr;
}