function solution(my_strings, parts) {
    return my_strings.reduce((acc, curr, idx) => {
        const [start, end] = parts[idx];
        acc += curr.substring(start, end + 1);
        return acc;
    }, '');
}