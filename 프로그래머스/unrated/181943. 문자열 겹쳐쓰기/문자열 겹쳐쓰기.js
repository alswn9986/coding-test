function solution(my_string, overwrite_string, s) {
    // y_string.substr(s, overwrite_string.length)
    return my_string.substr(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length)
}