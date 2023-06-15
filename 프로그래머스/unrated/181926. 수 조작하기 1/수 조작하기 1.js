function solution(n, control) {
    const obj = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    };
    return [...control].reduce((acc, curr) => {
        if (obj[curr]) acc += obj[curr];
        return acc;
    }, n);
}