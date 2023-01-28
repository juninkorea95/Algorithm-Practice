function solution(s) {
    if (parseInt(s) === Number(s)) return Number(s) // s와 result가 같을때 
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for (i=0; i < numbers.length; i++) {
        s = s.split(numbers[i]).join(i)
    }  return Number(s)

}

// 0단계 영어가 싫어요와 비슷한 유형 
