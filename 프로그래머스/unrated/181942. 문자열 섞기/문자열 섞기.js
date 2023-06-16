function solution(str1, str2) {
    return [...str1].reduce((acc, curr, idx) => acc + curr + str2[idx], '')
}