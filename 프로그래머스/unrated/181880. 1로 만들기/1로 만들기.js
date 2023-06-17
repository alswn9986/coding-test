function solution(num_list) {
    return num_list.reduce((a, c, i) => {
        let cnt = 0;
        while(true) {
            if (c === 1) break;
            if (c % 2) {
                c = (c - 1) / 2
            } else {
                c = c / 2
            }
            cnt++;
        }
        a += cnt;
        return a;
    }, 0)
}