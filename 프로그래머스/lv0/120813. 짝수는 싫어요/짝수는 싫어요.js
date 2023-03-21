function solution(n) {
    return Array(n).fill(1).map((item, index) => item + index).filter(item => item % 2 !== 0);
}