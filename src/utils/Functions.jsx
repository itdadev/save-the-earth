export function DividePerPage(array, itemsPerPage) {
  const length = array.length;
  const divide = Math.floor(length / itemsPerPage);

  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 itemsPerPage 잘라 새 배열에 넣기
    newArray.push(array.splice(0, itemsPerPage));
  }

  return newArray;
}
