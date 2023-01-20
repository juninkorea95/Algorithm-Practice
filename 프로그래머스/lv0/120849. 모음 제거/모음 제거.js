function solution(my_string) {
    let Arr = my_string.replaceAll('a','')
    let Arr2 = Arr.replaceAll('e','')
    let Arr3 = Arr2.replaceAll('i','')
    let Arr4 = Arr3.replaceAll('o','')
    let Arr5 = Arr4.replaceAll('u','')
    return Arr5
}


// 문자열에서 특정 문자 모두빼기 메소드를 사용
// a,e,i,o,u 순서대로 빼면서 배열을 계속 새로 정의
// 마지막으로 정의한 배열을 도출 