function solution(arr) {
    return arr.reduce((a, c) => [...a, ...Array(c).fill(c)], []);
}