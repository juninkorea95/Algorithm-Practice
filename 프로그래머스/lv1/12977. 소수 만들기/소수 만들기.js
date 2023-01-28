function solution(nums) {
    let a = [];
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            for (let k=j+1; k < nums.length; k++) {
                if (aa(nums[i],nums[j],nums[k])) {
                    a.push(nums[i]+nums[j]+nums[k])
                }
            } 
        }
    } return a.length
} 

function aa(x,y,z) {
    for (let i=2; i < (x+y+z); i++) {
        if ((x+y+z) % i ==0) {
            return false
        }
    } return true
}