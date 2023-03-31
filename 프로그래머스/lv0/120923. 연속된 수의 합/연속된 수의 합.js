function solution(num, total) {
    const factorial = (n) => n === 0 ? 0 : n + factorial(n - 1);
    let x = (total - factorial(num - 1)) / num; // 시작하는 수
    return Array(num).fill(x).map((item, index) => item + index);
}