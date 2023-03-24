function solution(array, n) {
    const diffArr = array.sort((a,b) => a-b).map(val => Math.abs(val - n));
    return array[diffArr.indexOf(Math.min(...diffArr))];
}