function solution(names) {
    const arr = Array(Math.ceil(names.length / 5)).fill(0).map((_, i) => i * 5);
    return names.filter((x, i) => arr.includes(i));
}