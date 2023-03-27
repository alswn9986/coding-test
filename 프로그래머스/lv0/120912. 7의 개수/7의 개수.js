function solution(array) {
    return array.reduce((acc, curr) => {
        acc += [...curr.toString()].filter(x => x === '7').length;
        return acc;
    }, 0);
}