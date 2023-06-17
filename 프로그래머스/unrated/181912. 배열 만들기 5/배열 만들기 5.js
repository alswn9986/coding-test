function solution(intStrs, k, s, l) {
    return intStrs.reduce((a, c, i) => {
        const slicedStr = +c.substr(s, l);
        if (slicedStr > k) {
            a.push(slicedStr);
        }
        return a;
    }, []);
}