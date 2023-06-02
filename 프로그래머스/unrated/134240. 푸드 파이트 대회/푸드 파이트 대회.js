function solution(food) {
    let arr = [];
    for (let i =1; i <= food.length -1; i++) {
        let num = Math.floor(food[i] / 2)
        arr.push(num)
    }
    let newArr = arr.map(x => x.toString())
    // console.log(newArr)
    let arr1 = []
    for (let i =0; i <= newArr.length -1; i ++) {
      arr1.push((i+1).toString().repeat(newArr[i]))  
    }
    
    let resultOne = arr1.join('')
    let resultTwo = arr1.reverse().join('')
    
    return resultOne + '0' + resultTwo
   
}

// 1. 2번째부터 끝번까지 for문을 돌린다.
// 2. 돌리면서 food[i]를 2로 나눈 몫을 구한다 
// 3. 몫의 개수만큼 i를 써준다 
// 4. i를 num개 만큼 써주세요 --> 이걸 코드로 어떻게 얘기하지.....


