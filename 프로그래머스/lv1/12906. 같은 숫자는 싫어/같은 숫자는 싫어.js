function solution(arr) {
    return arr.reduce((acc, cur, idx, src) => {
        if (idx !== 0) {
            if (src[idx-1] !== cur) {
                acc.push(cur)
            }
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
}