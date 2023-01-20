function solution(price) {
    if (price <100000) {
        return price
    } else if (100000 <= price && price < 300000) {
        return Math.floor(0.95 * price) 
    } else if (price < 500000) {
           return Math.floor(0.9 * price)
    } else if (price >= 500000) {
            return Math.floor(0.8 * price) 
    }
}
    
               
    
    
     
           