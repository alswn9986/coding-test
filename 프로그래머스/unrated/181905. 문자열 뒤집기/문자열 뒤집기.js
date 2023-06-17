function solution(my_string, s, e) {
    const substring = my_string.substring(s, e + 1);
    const reversedSubstring = substring.split('').reverse().join('');
    return my_string.substring(0, s) + reversedSubstring + my_string.substring(e + 1);
}