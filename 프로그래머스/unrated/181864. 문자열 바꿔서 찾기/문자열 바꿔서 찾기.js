function solution(myString, pat) {
    const change = (c) => c === 'A' ? 'B' : c === 'B' ? 'A' : c;
    return +[...myString].map(x => change(x)).join('').includes(pat);
}