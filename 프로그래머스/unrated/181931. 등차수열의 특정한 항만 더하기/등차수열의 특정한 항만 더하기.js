function solution(a, d, included) {
    return Array(included.length).fill(a)
            .map((_, i) => a + (i * d))
            .filter((_, i) => included[i])
            .reduce((a, c) => a + c);
}