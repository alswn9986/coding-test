function solution(survey, choices) {
    const category = {
        '1': ['R', 'T'],
        '2': ['C', 'F'],
        '3': ['J', 'M'],
        '4': ['A', 'N']
    };
    
    let map = new Map();
    survey = survey.forEach((item, idx) => {
        const choice = choices[idx];
        const [first, second] = [...item];
        const type = [1, 2, 3].includes(choice) ? first : second;
        
        if (map.has(type)) {
           map.set(type, map.get(type) + Math.abs(choice - 4));
        } else {
           map.set(type, Math.abs(choice - 4));
        }
    });
        
    const result = Object.keys(category).reduce((acc, curr, idx) => {
        const datas = [...category[curr]];
        const [first, second] = datas;
        const firstScore = map.get(first) ? map.get(first) : 0;
        const secondScore = map.get(second) ? map.get(second) : 0;
        let type = firstScore > secondScore ? first : second;
        if (firstScore === secondScore) {
            type = datas.sort()[0];
        }
        acc += type;
        return acc;
    }, '');
    
    return result;
}