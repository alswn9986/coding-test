function solution(strArr) {
    return strArr.map((item, idx) => idx % 2 ? item.toUpperCase() : item.toLowerCase());
}