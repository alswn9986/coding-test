function solution(arr, flag) {
    let answer = [];
    flag.forEach((x, i) => {
        if (x) {
            answer.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            answer.splice(answer.length - arr[i], arr[i]);
        }
    });
    return answer;
}