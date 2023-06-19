function solution(arr) {
    const from = arr.indexOf(2);
    const to = arr.lastIndexOf(2);
    return from < 0 ? [-1] : arr.slice(from, to + 1);
}