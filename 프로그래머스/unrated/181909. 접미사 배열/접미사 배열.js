function solution(my_string) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i, my_string.length));
    }
    return arr.sort((a, b) => a > b ? 1 : -1);
}