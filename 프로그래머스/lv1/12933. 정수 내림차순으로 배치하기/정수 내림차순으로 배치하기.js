function solution(n) {
    let A = n.toString().split('')
    let Arr = A.map(x => parseInt(x))
    let newArr = A.sort((a,b) =>b-a)
    let Answer = newArr.join('')
    return Number(Answer)
}

// 문자로 만들고 스플릿 하고 
// 맵으로 문자열화 된걸 다시 숫자의 배열로
// sort 사용해서 내림차순 정리
// 조인해서 하나의 숫자로 -> 근데 조인은 문자열에 쓰는 거니까 얘는 형태는 숫자지만 정수가 아니라 문자열의 형태다
// Number() 를 써주면 끝. 혹은 + 써도 됨. 