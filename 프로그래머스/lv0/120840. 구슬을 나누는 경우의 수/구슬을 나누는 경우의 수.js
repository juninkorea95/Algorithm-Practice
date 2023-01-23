function solution(balls, share) {
  let numerator = balls;
  let denominator = share;

  for (let i = 1; i < share; i++) {
    numerator *= balls - i;
    denominator *= share - i;
  }
  return numerator / denominator;
}

// function solution(balls, share) {
//     let A = 1;
//     for (let i=1; i<=balls; i++) {
//         A = A * i
//     }
//     let B = 1;
//     for (let i=1; i<=balls-share; i++) {
//         B = B * i
//     }
//     let C = 1;
//     for (let i=1; i<=share; i++) {
//         C = C * i
//     } return A / (B * C)
// }