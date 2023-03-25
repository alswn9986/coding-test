function solution(my_string) {
    return my_string.split(/[^0-9]/g).reduce((acc, curr) => {
        if (curr) {
            acc += parseInt(curr);
        }
        return acc;
    }, 0);
}