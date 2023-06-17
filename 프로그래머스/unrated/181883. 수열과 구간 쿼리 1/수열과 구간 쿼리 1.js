function solution(arr, queries) {
    arr.forEach((_, i) => {
        queries.forEach(([s, e]) => {
            if (s <= i && i <= e) {
                arr[i] = arr[i] + 1;
            }
        })
    });
    return arr;
}