function solution(numbers, k) {
    // let idx = 2 * (k - 1);
    // if (numbers.length < idx) {
    //     idx = idx - (numbers.length * numbers.length / k);
    // }
    // return numbers[idx];

    let pointer = 0;
    k--;
    while (k > 0) {
        k--;
        pointer += 2;
        if (pointer > numbers.length) {
            pointer -= numbers.length;
        }
    }
    console.log(pointer)
    return numbers[pointer];
}