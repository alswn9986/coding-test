const solution = (arr1, arr2) => {
    return arr1.map(row =>
        arr2[0].map((_, idx) =>
            row.reduce((acc, cur, rowIdx) => acc + cur * arr2[rowIdx][idx], 0)
        )
    );
}