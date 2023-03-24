function solution(num_list, n) {
    let arr = [];
    let temp = [];
    for (let i = 0; i < num_list.length; i++) {
        temp.push(num_list[i]);
        if ((i + 1) % n === 0) {
            arr.push(temp);
            temp = [];
        }
    }
    return arr;
}