function solution(n) {
    return Array.from({length: n}).map((x, xi) => {
        return Array.from({length: n}).map((y, yi) => {
            if (xi === yi) {
                return 1;
            } else {
                return 0;
            }
        });
    })
}