function solution(arr, queries) {
    queries.forEach(([s, e, k], index) => {
        arr.forEach((_, i) => {
            if (s <= i && i <= e && i % k === 0) {
                arr[i] = arr[i] + 1;
            }
        });
    });
    return arr;
}