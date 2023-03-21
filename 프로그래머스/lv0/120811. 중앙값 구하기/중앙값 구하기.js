function solution(array) {
    const center = parseInt(array.length / 2);
    return array.sort((a, b) => a - b)[center];
}