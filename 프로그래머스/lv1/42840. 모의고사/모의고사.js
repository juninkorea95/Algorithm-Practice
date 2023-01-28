function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%5]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%8]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%10]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};
  
    return answer;
}


// answers 배열을 for문을 돌려야 한다. 
// 돌려서 1번의 경우, answers[i] === (i % 5) 의 경우 correct ++ (5번으로 맞춘 경우는?)
// 돌려서 2번의 경우, answers[i]
