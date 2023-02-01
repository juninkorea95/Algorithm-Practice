// function solution(n, arr1, arr2) {
//    const answer = []
//    const Arr1 = arr1.map(x => x.toString(2).padStart(n,0))
//    const Arr2 = arr2.map(x => x.toString(2).padStart(n,0))
   
//    const sum = []
//    for (let i=0; i < n; i++) {
//        sum.push(String(+Arr1[i] + +Arr2[i]).padStart(n,0))
//    } 
   
//    for (let x of sum) {
//        answer.push(x.split('').map(x => (x==='0') ? (x = ' ') : x = '#').join(''))
//    }
//    return answer
// }

// 빈 배열 answer를 써둔다.
// arr1,arr2를 이진수로 바꾸고, n 크기만큼 배열 길이를 만들어줘야 하니까 padStart(n,0)으로 부족한 갯수만큼 앞에 0을 채운다.
// sum 은 이제 변환한 Arr1, Arr2의 각 요소를 합친 배열로, 요걸 바꿔서 공백과 #의 배열로 만들거다.
// 더하는 방법 역시 문자열처리된 각 요소를 +를 더해 숫자로 바꿔 연산해주고, string을 씌운 뒤 padStart()를 다시 씌워 아까 방식대로 계산결과 도출
// 그 이후에는 요소의 요소를 보고 0인 놈은 공백, 나머지는 #으로 바꾸는 식을 세운다. 
// sum을 기준으로 판별하여 answer 배열에 push하는 방법으로 간다.
// sum을 for문을 돌려서 요소를 split하여 map을 사용하여 안에 삼항연산자를 넣자.
// 0인 놈은 ' ' , 아닌 놈은 '#' 가 되게끔 식을 세워놓고, split했던 요소들은 다시 모아서 push를 해야한다. push 이전에 join('') 넣기
// push(split -> map -> join) 의 논리로 answer 배열을 완성하면 끝. 

function solution(n, arr1, arr2) {
  let Arr1 = arr1.map((x) => x.toString(2));
  let Arr2 = arr2.map((x) => x.toString(2));
  //   console.log(Arr1, Arr2);
  
  for (i = 0; i < Arr1.length; i++) {
    Arr1[i] = [...Arr1[i]];
    Arr2[i] = [...Arr2[i]];
    if (Arr1[i].length !== n) {
      let plusArr = Array(n - Arr1[i].length).fill("0");
      Array.prototype.push.apply(plusArr, Arr1[i]);
      Arr1[i] = plusArr;
    } else Arr1[i];
    if (Arr2[i].length !== n) {
      let plusArr2 = Array(n - Arr2[i].length).fill("0");
      Array.prototype.push.apply(plusArr2, Arr2[i]);
      Arr2[i] = plusArr2;
    } else Arr2[i];
    Arr1[i] = Arr1[i].join("");
    Arr2[i] = Arr2[i].join("");
    let tmp = "";
    for (j = 0; j < n; j++) {
      if (Arr1[i][j] === "0" && Arr2[i][j] === "0") {
        tmp += " ";
      } else tmp += "#";
    }
    Arr1[i] = tmp;
  }
  return Arr1;
}
