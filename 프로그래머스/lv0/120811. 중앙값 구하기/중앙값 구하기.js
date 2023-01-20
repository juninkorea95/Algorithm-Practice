function solution(array) {
    array = array.sort((a,b)=>a-b)
    let k = array.length-1
    return array[k/2]
}
   
    