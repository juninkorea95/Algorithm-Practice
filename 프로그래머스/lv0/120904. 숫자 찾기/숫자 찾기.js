function solution(num, k) {
  let str = String(num)
  let newArr = Array.from(str)
  let Arr = newArr.map(a => parseInt(a))
  for (i=0; i <Arr.length; i++) {
      if (Arr[i] === k) {
          return i+1
      } 
      if (!Arr.includes(k)) {
          return -1
      }
  } 
}

// 그냥 숫자로 되어있는 걸 문자열로 바꾼다
// 문자열로 되어있는 걸 배열로 형성한다
// 이제 문자열을 원소로 갖는 그 원소를 숫자로 변환한다. --> 이단계에서 29183 -> [2,9,1,8,3]으로 변환된다. 
// 여기서 for문 돌려서 배열의 요소가 k랑 같다면 그 인덱스 값에 1을 더해준다.
// 똑같은 for문 안에서 병렬 구조로 만약 배열이 k를 포함을 안하면 -1 을 산출하라고 명령한다. 끝.