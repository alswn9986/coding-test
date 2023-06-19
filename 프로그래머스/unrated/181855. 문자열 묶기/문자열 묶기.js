function solution(strArr) {
    let map = new Map();
    strArr.forEach((item) => {
        const len = item.length;
        if (map.has(len)) {
            map.set(len, map.get(len) + 1);
        } else {
            map.set(len, 1);
        }
    });
    return Math.max(...map.values())
}