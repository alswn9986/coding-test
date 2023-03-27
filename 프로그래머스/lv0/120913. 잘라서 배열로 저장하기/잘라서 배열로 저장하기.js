function solution(my_str, n) {
    let arr = [];
    let myStrArr = [...my_str];
    while (myStrArr.length > 0) {
        arr.push(myStrArr.splice(0, n).join(''));
    }
    return arr;
}