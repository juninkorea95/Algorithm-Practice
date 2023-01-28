// function solution(answers) {
//     var firstPlace = []
//     var a1 = [1, 2, 3, 4, 5]
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
//     var ans1 = answers.filter((x,i) => x === a1[i/5]).length;
//     var ans2 = answers.filter((x,i) => x === a2[i/8]).length;
//     var ans3 = answers.filter((x,i) => x === a3[i/8]).length;
//     var max = Math.max(ans1,ans2,ans3);
    
//     if (ans1 === max) {firstPlace.push(1)};
//     if (ans2 === max) {firstPlace.push(2)};
//     if (ans3 === max) {firstPlace.push(3)};
    
//     return firstPlace
// }

function solution(answers) {
    var firstPlace = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var ans1 = answers.filter((a,i)=> a === a1[i%5]).length;
    var ans2 = answers.filter((a,i)=> a === a2[i%8]).length;
    var ans3 = answers.filter((a,i)=> a === a3[i%10]).length;
    var max = Math.max(ans1,ans2,ans3);

    if (ans1 === max) {firstPlace.push(1)};
    if (ans2 === max) {firstPlace.push(2)};
    if (ans3 === max) {firstPlace.push(3)};
  
    return firstPlace;
}

// a1 , a2, a3 를 배열화시켜주는게 일단 중요하다. 패턴 뽑아서 패턴이 한번 도는 만큼의 원소만 뽑아서 배열화 
// 둘 중 하나 선택이다. for문을 돌리느냐, filter로 answers에서 추출을 하느냐
// 웬만하면 filter를 쓸 버릇을 해야한다. 
// 필터로 원 배열 answers에서 맞는 정답만 추린다 라는 개념으로 filter는 반드시 사용되어야 한다. 
// filter로 거르는 방법은, 아까 만들어둔 ans1-3 배열을 길이만큼 나눈 나머지로 원소를 돌려서 일치하는 놈을 추리고, length만 뽑는다. 
// length로 뽑는 이유는 굳이 배열로 다시 안만들고 숫자끼리만 Math.max를 사용하게 하기 위함.
// Match.max를 뽑아서 처음 빈배열 firstPlace에 1,2,3 골라서 올려주면 끝.  





