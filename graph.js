function knightMoves(start, end) {
  if (
    start[0] < 0 ||
    start[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    end[0] < 0 ||
    end[0] > 7 ||
    end[1] < 0 ||
    end[1] > 7
  ) {
    throw new Error('x and y coordinates must be integers between 0 and 7.');
  }

  let moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  let queue = [];
  let visited = new Set();

  queue.push({ position: start, path: [start] });

  console.log(`> knightMoves([${start}],[${end}])`);
  while (queue.length > 0) {
    let { position, path } = queue.shift();
    let [x, y] = position;

    // If reached end coordinates return path
    if (x === end[0] && y === end[1]) {
      return console.log(`=> You made it in ${path.length - 1} moves!\n`, path);
    }

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

knightMoves([0, 0], [3, 0]);
