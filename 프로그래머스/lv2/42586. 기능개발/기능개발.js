function solution(progresses, speeds) {
    let days = progresses.map((item, index) => Math.ceil((100 - item) / speeds[index]));
    let max = days[0];
    return days.reduce((acc, cur, idx, src) => {
        if (idx !== 0) {
            if (max >= cur) {
                acc[acc.length - 1] = acc[acc.length - 1] + 1;
            } else {
                acc.push(1);
                max = cur;
            }
        }
        return acc;
    }, [1]);
}