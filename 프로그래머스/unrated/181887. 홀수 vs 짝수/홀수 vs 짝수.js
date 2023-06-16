function solution(num_list) {
    let [even, odd] = num_list.reduce(([a, b], curr, idx) => idx % 2 ? [a + curr, b] : [a, b + curr], [0, 0]);
    return Math.max(even, odd);
}