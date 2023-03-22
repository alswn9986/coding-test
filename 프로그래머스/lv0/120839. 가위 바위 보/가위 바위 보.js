function solution(rsp) {
    // 가위 2, 바위 0, 보 5
    return [...rsp].map(x => x === '0' ? 5 : x === '2' ? 0 : 2).join('');

}