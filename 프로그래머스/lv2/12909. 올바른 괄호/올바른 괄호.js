function solution(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        cnt += (s[i] === '(' ? 1 : -1);
        if (cnt < 0) {
            return false;
        }
    }
    const peek = (arr) => arr[arr.length - 1];
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === ')') {
            const prev = peek(arr);
            if (prev) {
                arr.pop();
            } else {
                return false;
            }
        } else {
            arr.push(true);
        }
    }
    return arr.length === 0 ? true : false;
}