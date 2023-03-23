function solution(age) {
    return [...(age + '')].map(x => String.fromCharCode(parseInt(x) + 97)).join('');
}