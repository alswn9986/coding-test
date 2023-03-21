function solution(numbers) {
    const [x, y] = numbers.sort((a, b) => b - a);
    return x * y;
}