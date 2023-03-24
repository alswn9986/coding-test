function solution(array, n) {
    array.push(n);
    let idx = array.sort().findIndex(x => x === n);
    return array[idx] - array[idx - 1] > array[idx + 1] - array[idx] ? array[idx + 1] : array[idx - 1];
}