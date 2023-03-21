function solution(money) {
    const cost = 5500;
    return [parseInt(money / cost), money % cost];
}