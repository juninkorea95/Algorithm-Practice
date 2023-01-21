function solution(box, n) {
    let answer = 1;
    let newArr = box.map(a => Math.floor(a/n))
    for (x of newArr) {
        answer = answer * x
    } return answer
}

