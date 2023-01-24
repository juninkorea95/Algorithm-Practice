function solution(dots) {
        let A = [];
        let B = [];
        for (let i=0; i<dots.length; i++) {
           A.push(dots[i][0])
            B.push(dots[i][1])
       } return (Math.max(...A) - Math.min(...A)) * (Math.max(...B) - Math.min(...B))
    }