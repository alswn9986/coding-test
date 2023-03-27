function solution(numbers) {
    const obj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    
    Object.keys(obj).map(x => {
        const regex = new RegExp(`${x}`, 'g');
        numbers = numbers.replace(regex, obj[x]);
    });
    
    return +numbers;
}