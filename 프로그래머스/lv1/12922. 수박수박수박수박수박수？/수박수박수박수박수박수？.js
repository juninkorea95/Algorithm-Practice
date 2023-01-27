function solution(n) {
    let Answer = [];
    for (let i=1; i<=n; i++) {
        if (i % 2 === 1) {
            Answer.push('수')
        } else Answer.push('박')
    } return Answer.join('')
}

// for문 돌려서 (1부터 n까지)
// 2로 나눠서 나머지가 1이면 수를
// 나머지가 0이면 박을
// 이상태로 새 배열에 푸시를 넣고, 조인하면 끝! 