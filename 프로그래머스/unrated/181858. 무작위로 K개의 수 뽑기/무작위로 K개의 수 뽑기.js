function solution(arr, k) {
    const result = Array(k).fill(-1);
    let cnt = 0;
    arr.forEach((item) => {
        if (!result.includes(item) && cnt < k) {
            result[cnt] = item;
            cnt++;
        }
    });
    return result;
}