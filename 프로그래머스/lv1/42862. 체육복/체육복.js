function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let temp = lost.map(x => {
        if (reserve.includes(x)) {
            reserve.splice(reserve.indexOf(x), 1);
            answer++;
            return [];
        } else {
            return [x-1, x+1];
        }
    });
    temp.forEach(([a, b], i) => {
        const spliceReserve = (idx) => {
            reserve.splice(idx, 1);
            answer++;
        }
        
        let target = b;
        let aIdx = reserve.indexOf(a);
        let bIdx = reserve.indexOf(b);
        
        if (aIdx === -1 && bIdx === -1) {
            return;
        }
        
        if (aIdx !== -1 && bIdx !== -1) {
            let aLen = temp.slice(i + 1).flat().filter(v => v === a).length;
            let bLen = temp.slice(i + 1).flat().filter(v => v === b).length;
            if (aLen < bLen) {
                spliceReserve(aIdx);
            } else {
                spliceReserve(bIdx);
            }
        } else if (aIdx !== -1) {
            spliceReserve(aIdx);
        } else if (bIdx !== -1) {
            spliceReserve(bIdx);
        }
    });
    return answer;
}