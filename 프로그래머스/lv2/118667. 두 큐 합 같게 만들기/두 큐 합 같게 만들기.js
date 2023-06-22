function solution(queue1, queue2) {
    let answer = 0;
    
    const max = queue1.length * 3;
    let value = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
    
    let [i1, i2] = [0, 0];
    while (value !== 0 && answer < max) {
        if (value > 0) {
            const v = queue1[i1];
            i1++;
            value -= v;
            queue2.push(v);
        } else {
            const v = queue2[i2];
            i2++;
            value += v;
            queue1.push(v);
        }
        answer++;
    }
    return value !== 0 ? -1 : answer;
}