function solution(myStr) {
    const delimiter = ["a", "b", "c"];
    const regex = new RegExp([`[${delimiter.join("")}]+`], "g");
    const result = myStr.split(regex).filter((str) => str !== "");

    if (result.length === 0) {
        return ["EMPTY"];
    }

    return result;
}