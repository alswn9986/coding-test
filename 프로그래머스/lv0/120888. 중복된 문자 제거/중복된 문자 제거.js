function solution(my_string) {
    const arr = [...my_string];
    return arr.filter((item, index) => {
        let idx = arr.indexOf(item);
        if (idx < index)    return false;
        else    return true;
    }).join('')
}