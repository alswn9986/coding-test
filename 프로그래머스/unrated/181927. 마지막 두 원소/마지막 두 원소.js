function solution(num_list) {
    const idx = num_list.length - 1;
    const last = num_list[idx];
    const secondToLast = num_list[idx - 1];
    if (last > secondToLast) {
        num_list.push(last - secondToLast);
    } else {
        num_list.push(last * 2);
    }
    return num_list;
}