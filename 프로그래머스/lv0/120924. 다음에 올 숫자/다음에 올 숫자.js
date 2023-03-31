function solution(common) {
    let [first, second, third] = common;
    let diff1 = second - first;
    let diff2 = third - second;
    if (diff1 === diff2) {
        return common.pop() + diff1;
    } else {
        return common.pop() * (diff2 / diff1);
    }
}