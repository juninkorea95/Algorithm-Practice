const solution = sides => {
  let side = 0;
  side = sides.sort((a, b) => {
    return b - a;
  });
  return side[0] < side[1] + side[2] ? 1 : 2;;
}

