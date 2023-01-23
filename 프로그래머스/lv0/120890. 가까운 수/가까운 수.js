function solution(array, n) {
    let AA = array.sort((a,b) =>a-b)
    let A = AA.map(x => Math.abs(x-n))
    for (i=0; i < A.length; i++) {
        if (A[i] === Math.min(...A)) {
            return array[i]
        }
    } 
}

// 그냥 숫자가 담긴 배열에서 최솟값 적용하면 안됨
// 그 배열에서 수를 꺼내와서 최솟값적용해야 먹힘 
    