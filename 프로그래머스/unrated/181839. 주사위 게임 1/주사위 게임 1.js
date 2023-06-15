function solution(a, b) {
    
    return (+( a-b ) % 2 === 0) 
        ? (a % 2 === 1) 
        ? a ** 2 + b ** 2 
        : Math.abs(a - b)  
        : 2 * (a + b)

}