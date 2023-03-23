function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = ((denom / denom1) * numer1) + ((denom / denom2) * numer2);
    
    let denomArr = Array(denom).fill(1).map((item, idx) => item + idx).filter(item => denom % item === 0).sort((a, b) => b - a);
    let numerArr = Array(numer).fill(1).map((item, idx) => item + idx).filter(item => numer % item === 0).sort((a, b) => b - a);
    
    let measure = denomArr.find(x => numerArr.includes(x));
    
    return [numer / measure, denom / measure]
}