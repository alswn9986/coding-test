function solution(picture, k) {
  const rows = picture.length;
  const cols = picture[0].length;

  const newRows = rows * k;
  const newCols = cols * k;

  const newPicture = [];
  for (let i = 0; i < newRows; i++) {
    let row = '';
    for (let j = 0; j < newCols; j++) {
      row += picture[Math.floor(i / k)][Math.floor(j / k)];
    }
    newPicture.push(row);
  }

  return newPicture;
}