function solution(numLog) {
    const getStr = (n) => {
        if (n === 1) return 'w';
        if (n === -1) return 's';
        if (n === 10) return 'd';
        if (n === -10) return 'a';
        return '';
    }
    const lastIndex = numLog.length - 1;
    let answer = '';
    for (let i = lastIndex; i > 0; i--) {
        answer += getStr(numLog[i] - numLog[i-1]);
    }
    return [...answer].reverse().join('');
}