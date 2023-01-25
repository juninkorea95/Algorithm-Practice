function solution(A,B) {
    if (A === B) return 0
    
    let total=0;
    let Arr = A.split('')
    
    for(let i=Arr.length-1; i>=0; i--) {
        
        let A = Arr.splice(Arr.length-1,1)[0]
        
        total++
        
        Arr.unshift(A)
        if (Arr.join('') === B) return total
        
        
    } return -1
}










// function solution(A, B) {
//     if (A === B) return 0
    
//     let total = 0;
//     let arr = A.split('')
    
//     for (let i=arr.length-1; i>=0; i--) {
//         let A = arr.splice(arr.length-1,1)[0]
        
//         arr.unshift(A)
        
//         total++
        
//         if(arr.join('') === B) return total;
//     }
//     return -1
// }