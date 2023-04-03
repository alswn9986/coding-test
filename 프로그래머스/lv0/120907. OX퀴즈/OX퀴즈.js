function solution(quiz) {
    return quiz.map(x => eval(x.replace('=', '==')) === true ? 'O' : 'X');
    // quiz.map(e => ["X","O"][~~eval(e.replace("=","=="))])
}