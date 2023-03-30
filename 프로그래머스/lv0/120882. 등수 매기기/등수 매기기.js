function solution(score) {
    score = score.map(x => (x[0] + x[1]) / 2);
	let sortedScore = [...score].sort((a, b) => b - a);
	let rank = score.map(a => sortedScore.findIndex(b => a === b) + 1);
    return rank;
}