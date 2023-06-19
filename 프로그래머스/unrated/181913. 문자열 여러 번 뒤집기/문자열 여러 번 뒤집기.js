function solution(my_string, queries) {
    const reverseRange = (str, a, b) => {
        return str.slice(0, a) + str.slice(a, b + 1).split('').reverse().join('') + str.slice(b + 1);
    }
    
    queries.forEach(([x, y]) => {
        my_string = reverseRange(my_string, x, y)
    });
  
    return my_string
}