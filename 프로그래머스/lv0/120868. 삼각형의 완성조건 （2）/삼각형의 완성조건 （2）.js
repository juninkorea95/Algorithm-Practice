function solution(sides) {
    let a = sides[0]
    let b = sides[1]
    let newArr = sides.sort((a,b) => b-a)
    let x = newArr[0]
    let y = newArr[1]
    return (x+y) - (x-y) -1
}

// 1. sides[0], sides[1] 로 분리해놓는다.
// 2. 내림차순 정리한다.
// 3. 두 값을 더한놈 - 두 값을 뺀 놈 -1 
