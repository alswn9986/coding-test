function solution(arr, n) {
    return arr.map((item, idx) => arr.length % 2 !== idx % 2 ? item + n : item);
}