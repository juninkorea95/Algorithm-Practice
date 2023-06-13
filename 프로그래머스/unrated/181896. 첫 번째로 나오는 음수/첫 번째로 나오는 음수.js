function solution(num_list) {
    let answer = [];
    for (let i=0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            answer.push(i)
        } 
    }
    return answer.length === 0 ? -1 : answer[0]
}