function solution(s) {
    return s.split(' ').reduce((acc, cur, idx, src) => {
        if (cur === 'Z')    acc = acc - parseInt(src[idx - 1]);
        else    acc += parseInt(cur);
        return acc;
    }, 0);
}