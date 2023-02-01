function solution(s) {
    let ansArr = []
    
    let array = s.split(' ')
    let newArr = array.map(x => parseInt(x)).sort((a,b) => a-b)
    
    ansArr.push(newArr[0], newArr[newArr.length-1])
    
    return ansArr.join(' ')
       
}