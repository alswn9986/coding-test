function solution(rank, attendance) {
    const arr = rank.map((_, i) => ({'num': i, 'rank': rank[i], 'attendance': attendance[i]}));
    const [a, b, c] = arr.sort((a, b) => a.rank - b.rank).filter(x => x.attendance);
    return 10000 * a.num + 100 * b.num + c.num;
}