function solution(arr) {
    let cnt = 0;
    while (true) {
        let modifiedArr = arr.map((item, index) => {
            if (item >= 50 && item % 2 === 0) {
                return item / 2;
            } else if (item < 50 && item % 2 === 1) {
                return item * 2 + 1;
            } else {
                return item;
            }
        });
        if (JSON.stringify(modifiedArr) === JSON.stringify(arr)) {
            break;
        }
        arr = modifiedArr;
        cnt++;
    }
    return cnt;
}