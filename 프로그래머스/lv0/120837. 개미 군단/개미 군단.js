function solution(hp) {
   let First = Math.floor(hp / 5) 
   let Second = Math.floor(hp % 5 / 3)
   let Last = hp % 5 % 3
   return First + Second + Last
}

// hp 에서 5를 나눈 몫만 취한다. 
// 나머지를 3으로 나눈 몫만 취한다. 
// 나머지를 더한다. 

