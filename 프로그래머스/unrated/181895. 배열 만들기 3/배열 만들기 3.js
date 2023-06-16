function solution(arr, intervals) {
    const [first, second] = intervals;
    return [...arr.slice(first[0], first[1] + 1), ...arr.slice(second[0], second[1] + 1)]
}