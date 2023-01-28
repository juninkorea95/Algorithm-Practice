function solution(answers) {
    let firstPlace =[]
    
    let a1 = [1,2,3,4,5]
    let a2 = [2,1,2,3,2,4,2,5]
    let a3 = [3,3,1,1,2,2,4,4,5,5]
    
    let ans1 = answers.filter((x,i) => x === a1[i%5]).length;
    let ans2 = answers.filter((x,i) => x === a2[i%8]).length;
    let ans3 = answers.filter((x,i) => x === a3[i%10]).length;
    let maxpoint = Math.max(ans1,ans2,ans3)
    
    if (maxpoint ===ans1) {firstPlace.push(1)}
    if (maxpoint ===ans2) {firstPlace.push(2)}
    if (maxpoint ===ans3) {firstPlace.push(3)}
    
    return firstPlace
}