function solution(spell, dic) {
    let word = spell.sort().join('');
    return dic.some(x => [...x].sort().join('') === word) ? 1 : 2;
}