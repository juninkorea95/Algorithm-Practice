function solution(n) {
   let sum = 1
   for (i=1; i <=10; i++) {
       sum = sum * i 
     if (sum === n) {
       return i
   } if (sum > n) {
       return i-1
   }
   } 
}
