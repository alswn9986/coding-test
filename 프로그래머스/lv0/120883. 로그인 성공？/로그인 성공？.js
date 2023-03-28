function solution(id_pw, db) {
    let [id, pw] = id_pw;
    let checkId = db.find(x => x[0] === id);
    if (checkId) {
        if (checkId[1] === pw) {
            return 'login'
        } else {
            return 'wrong pw'
        }
    } else {
        return 'fail'
    }
}