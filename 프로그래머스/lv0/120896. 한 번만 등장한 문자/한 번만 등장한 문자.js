function solution(s) {
    return [...s].filter(x => s.split(x).length === 2).sort().join('');
}