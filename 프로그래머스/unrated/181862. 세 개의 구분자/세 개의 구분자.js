function solution(myStr) {
    const arr = myStr.split(/[abc]/).filter(e => e);
    return arr.length == 0 ? ["EMPTY"] : arr;
}