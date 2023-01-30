// function solution(d, budget) {
//     var answer = 0, sum = 0;
//     d.sort((a,b) => a - b);

//     for(let i = 0; i < d.length; i++){
//         answer = answer +1;
//         sum += d[i]

//         if(sum > budget)
//             answer = answer -1;
//     }
  
//     return answer;
// }

function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b),0) > budget) {
      d.pop();
    }

    return d.length;
}

// d 원소의 합을 구한다.
// d 원소 합 - budget 한 값을 a라 한다. 
// d의 원소 중 무작위로 뽑아 더해 a를 만들 때, 뽑게 되는 수의 최솟값을 answer라 한다. 
// d.length에서 answer 빼주면 끝. 