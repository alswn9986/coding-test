function solution(my_string, indices) {
    let arr = [...my_string]
    indices.forEach(x => {
        arr[x] = '';
    })
    return arr.join('');
}