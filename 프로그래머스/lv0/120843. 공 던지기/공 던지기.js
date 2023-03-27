function solution(numbers, k) {
    let pointer = 0;
    k--;
    while (k > 0) {
        k--;
        pointer += 2;
        if (pointer > numbers.length) {
            pointer -= numbers.length;
        }
    }
    return numbers[pointer];
}