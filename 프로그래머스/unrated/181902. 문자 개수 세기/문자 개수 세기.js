function solution(my_string) {
    let arr = Array(52).fill(0);
    const isUpperCase = (str) => {
        return str === str.toUpperCase();
    }
    
    [...my_string].forEach((item) => {
        let idx = isUpperCase(item) ? item.charCodeAt()-65 : item.charCodeAt()-97+26;
        arr[idx] = arr[idx] + 1;
    });
    
    return arr;
}