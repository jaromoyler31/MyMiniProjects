let pyramid = [];

for (let i = 0; i < 4; i++) {
  let row = [];

  for (let j = 0; j < 4; j++) {
    if (j >= i) {
      row.push(i + 1);
    } else {
      row.push(" ");
    }
  }

  pyramid.push(row);
}

console.log(pyramid);