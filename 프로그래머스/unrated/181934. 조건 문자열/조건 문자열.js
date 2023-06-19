function solution(ineq, eq, n, m) {
    const temp = `${n} ${ineq}${eq === '=' ? eq : ''} ${m}`;
    const custom = new Function ('return ' + temp);
    return +custom();
}