function solution(participant, completion) {
    let A = participant.sort()
    let B = completion.sort()
    for (i=0; i<A.length; i++) {
        if (A[i] !== B[i]) {
            return participant[i]
        }
    }
}