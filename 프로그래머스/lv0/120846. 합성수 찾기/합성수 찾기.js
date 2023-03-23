function solution(n) {
    let arr = Array(n).fill(0).map((item, idx) => item + idx + 1);
    return arr.filter((item) => {
        return Array(item).fill(0).map((item, idx) => item + idx + 1).reduce((acc, curr) => {
            if (item % curr === 0) {
                acc++;
            }
            return acc;
        }, 0) >= 3
    }).length
}