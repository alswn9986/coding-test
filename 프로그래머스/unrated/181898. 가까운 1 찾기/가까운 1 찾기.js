function solution(arr, idx) {
    return arr.findIndex((item, index) => index >= idx && item === 1);
}