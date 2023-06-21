function solution(today, terms, privacies) {
    const term = {};
    terms.forEach(t => {
        const [type, month] = t.split(' ');
        term[type] = Number(month);
    });
    
    const todayDate = new Date(today);
    return privacies.reduce((acc, curr, idx) => {
        const [date, type] = curr.split(' ');
        const acceptDate = new Date(date);
        acceptDate.setMonth(acceptDate.getMonth() + term[type]);
        if (todayDate >= acceptDate) {
            acc.push(idx + 1);
        }
        return acc;
    }, []);
}