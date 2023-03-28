function solution(clothes) {
    let obj = [];
    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        if (obj[`${type}`]) {
            obj[`${type}`] = obj[`${type}`] + 1;
        } else {
            obj[`${type}`] = 1; 
        }
    }
    return Object.keys(obj).reduce((acc, cur) => {
        acc *= (obj[`${cur}`] + 1);
        return acc;
    }, 1) - 1;
}