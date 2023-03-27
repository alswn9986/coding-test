function solution(n) {
    let arr = [];
    let division = 2;
    while (n > 1) {
        if (n % division === 0) {
            n = n / division;
            if (!arr.includes(division)) {
                arr.push(division);
            }
        } else {
            division++;
        }
    }
    return arr;
}