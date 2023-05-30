function solution(absolutes, signs) {
    let newArr = []
    for (let i =0; i <= absolutes.length -1; i++) {
        signs[i] === true ? newArr.push(absolutes[i]) : newArr.push(-absolutes[i])
    }
    
    let sum = 0
    
    for (let i = 0; i <= newArr.length -1; i++) {
        sum += newArr[i]
    }
    
    return sum 
}