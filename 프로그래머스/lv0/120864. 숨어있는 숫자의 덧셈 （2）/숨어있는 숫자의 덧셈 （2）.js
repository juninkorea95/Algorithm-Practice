function solution(my_string) {
    let array = []
    for(let x=0; x<my_string.length; x++){
        let num = Number(my_string[x]);
        let idx = 0;
        if(!Number.isInteger(num)) continue;

        while(Number.isInteger(Number(my_string[x+idx]))){
            idx++;
        }
        const cut = my_string.slice(x,x+idx);
        array.push(Number(my_string.slice(x,x+idx)))
        x+=idx
    }
    // console.log(array)
    if(array == false) return 0;
    return array.reduce((acc,res)=> acc += res)
}
    
  