function solution(n) {
    return Array(n).fill(1).map((item, idx) => item + idx).filter(x => n % x === 0).sort((a, b) => a - b);
}