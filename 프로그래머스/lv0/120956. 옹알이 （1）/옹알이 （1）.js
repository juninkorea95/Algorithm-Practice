function solution(babbling) {
   let arr = []; 
   const patterns = ["aya", "ye", "woo", "ma"];
  
    babbling.map(word => {
        let newWord = word;
        let foundPattern = true;
        
        while (foundPattern) {
            foundPattern = false;
            
            for (const pattern of patterns) {
                if (newWord.startsWith(pattern)) {
                    newWord = newWord.replace(pattern, "");
                    foundPattern = true;
                    break;
                }
            }
        }
        
        arr.push(newWord)
        
    })
    
    let result = 0; 
    arr.forEach (x => {
        if (x ==="") {
            result += 1
        }
    })
    
    return result 
}
