function solution(emergency) {
    let sortedArr = [...emergency].sort((a, b) => b - a);
    return emergency.map(x => sortedArr.findIndex(y => y === x) + 1);
}