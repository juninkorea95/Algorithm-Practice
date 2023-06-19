function solution(num_list) {
    let answer = []
    let result = 0
    for(let i = num_list.length -1; i >= 0; i--) {
       answer.push(num_list[i])
    }
    if(answer[0] > answer[1]) {
        result = answer[0] - answer[1]
    }else if(answer[0] <= answer[1]){ 
       result = answer[0]*2
    }
    let ask = answer.reverse()
           ask.push(result)
    return ask
   }