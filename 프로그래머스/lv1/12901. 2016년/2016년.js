function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}


    
    //Date 를 쓰지 않고도 구하는 법을 써보는 것도 좋을 것 같다. 