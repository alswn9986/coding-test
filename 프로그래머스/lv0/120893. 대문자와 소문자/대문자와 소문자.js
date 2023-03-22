function solution(my_string) {
    return [...my_string].map(x => {
        let flag = 1;
        if (x.charCodeAt() >= 97) flag = -1;
        return String.fromCharCode(x.charCodeAt() + (32 * flag))
    }).join('');
}