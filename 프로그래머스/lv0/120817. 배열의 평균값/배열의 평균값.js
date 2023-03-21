function solution(numbers) {
    return numbers.reduce((acc, curr) => curr += acc, 0) / numbers.length;
}