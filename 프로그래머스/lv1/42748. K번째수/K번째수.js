function solution(array, commands) {
    let newArr = []
    for (let i =0; i < commands.length; i++) {
    newArr.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1])
    } return newArr
}

// i-1,j 로 잘라야 올바르게 잘린다. 
// k-1 로 인덱스를 줘야 제대로 나온다. 