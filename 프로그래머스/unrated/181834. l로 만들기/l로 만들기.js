function solution(myString) {
    const code = 'l'.charCodeAt();
    return [...myString].map(x => code > x.charCodeAt() ? 'l' : x).join('');
}