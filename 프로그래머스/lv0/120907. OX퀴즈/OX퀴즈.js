function solution(quiz) {
    return quiz.map(x => eval(x.replace('=', '==')) === true ? 'O' : 'X');
}