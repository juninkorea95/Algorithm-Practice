function solution(left, right) {
    let evenPlus = 0;
    let oddMinus = 0;
    
    for (let i=left; i <= right; i++) {
        if (numCount(i) % 2 === 0) {
            evenPlus += i
        } else {
            oddMinus += i
        }
    } 
    
    
    function numCount(n) {
        let count = 0;
        for (let i=1; i<=n; i++) {
            if (n % i ===0) {
                count++
            }
        } return count;  
    } 
    numCount()
    
    return evenPlus - oddMinus
    
}