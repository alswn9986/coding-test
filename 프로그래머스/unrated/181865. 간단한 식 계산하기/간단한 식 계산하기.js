function solution(binomial) {
    return new Function('return ' + binomial)()
}