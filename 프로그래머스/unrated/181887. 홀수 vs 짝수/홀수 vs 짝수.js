function solution(num_list) {
    let [even, odd] = num_list.reduce((acc, curr, idx) => {
        acc[(idx + 1) % 2] = acc[(idx + 1) % 2] + curr;
        return acc;
    }, [0, 0]);
    return Math.max(even, odd);
}