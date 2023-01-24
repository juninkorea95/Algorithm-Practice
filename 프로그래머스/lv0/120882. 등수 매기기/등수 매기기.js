function solution(score) {
    let average = []
    for (let i=0; i < score.length; i++) {
        average.push((score[i][0] + score[i][1]) / 2)
    } 
    let newArr = average.slice('').sort((a,b) =>b-a)
    return average.map(x => newArr.indexOf(x)+1)
}

 // let newArr = emergency.slice('').sort((a,b) => b-a)
 //    return emergency.map(x => newArr.indexOf(x)+1)