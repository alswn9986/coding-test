function solution(my_string) {
    return [...my_string].reduce((acc, curr) => {
        if (Number(curr)) {
            acc += parseInt(curr);
        }
        return acc;
    }, 0);
}