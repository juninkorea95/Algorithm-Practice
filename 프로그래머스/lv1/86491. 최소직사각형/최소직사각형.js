function solution(sizes) {
    let A =[]
    let B =[]
    for (let i=0; i < sizes.length; i++) {
        sizes[i].sort((a,b) =>a-b)
        A.push(sizes[i][0])
        B.push(sizes[i][1])
    } return Math.max(...A) * Math.max(...B)
}


// 빈 배열 A, B를 둔다. -> 이유 : A에는 배열 안의 배열 중 작은 놈만 모을 거고 / B에는 배열 안의 배열 중 큰 놈만 모은다.
// 어떻게? -> 배열 안에 배열을 대상으로 sort를 활용하면 배열안에 배열이 오름차순으로 정렬되게 할 수 있다. 
// 그 이후 배열 속 배열의 작은값만 모인 A의 최댓값 * 배열 속 배열의 큰값만 모인 B의 최댓값 두개를 곱해준다. 끝. 

