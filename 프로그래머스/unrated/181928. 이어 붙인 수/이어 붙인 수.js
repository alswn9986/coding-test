function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach(num => {
        if (!(num % 2)) even += num;
        else odd += num;
    });
    return +even + +odd;
}