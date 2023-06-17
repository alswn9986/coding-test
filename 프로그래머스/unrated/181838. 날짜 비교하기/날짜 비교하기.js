function solution(date1, date2) {
    const convert = ([year, month, day]) => `${year}${month}${day}`;
    return (convert(date1) - convert(date2)) < 0 ? 1 : 0;
}