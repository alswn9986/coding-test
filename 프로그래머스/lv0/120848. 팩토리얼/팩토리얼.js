function solution(n) {
    let i = 1;
    while (1) {
        let value = Array(i).fill(1).map((item, idx) => item + idx).reduce((acc, curr) => {
            acc *= curr;
            return acc;
        }, 1);
        if (value > n) {
            break;
        }
        i++;
    }
    return i - 1;
}