function solution(order) {
    const category = {
        'americano': 4500,
        'cafelatte': 5000
    };
    return order.reduce((acc, curr) => {
        curr = curr.replaceAll('ice', '').replaceAll('hot', '');
        acc += category[curr] ? category[curr] : category['americano'];
        return acc;
    }, 0);
}