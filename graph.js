function knightMoves(start, end) {
  let moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];
  let queue = [];
  let visited = new Set();

  queue.push({ position: start, path: [start] });

  while (queue.length > 0) {
    let { position, path } = queue.shift();
    let [x, y] = position;

    if (x < 0 || y < 0 || x > 8 || y > 8) {
      throw new Error('x and y coordinates must be positive integer between 0 and 7.');
    }

    // If reached end coordinates return path
    if(x === end[0] && y === end[1]) return path + 'hello';

    for (let [moveX, moveY] of moves) {
      let newX = x + moveX;
      let newY = y + moveY;
      let key = `${newX},${newY}`;

      // Check board bounds
      if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8 && !visited.has(key)) {
        visited.add(key);
        queue.push({ position: [newX, newY], path: [...path, [newX, newY]] });
      }
    }
  }
}

console.log(knightMoves([2, 0], [3, 3]));
