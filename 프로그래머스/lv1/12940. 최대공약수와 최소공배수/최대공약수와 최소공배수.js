function solution(n, m) {
    let Arr = [];
    for (let i=1; i<=Math.min(n,m); i++) {
        if (n % i ===0 && m % i ===0) {
            Arr.push(i)
        }
    } let gcb = Math.max(...Arr)
    let lcm = (n *m ) / gcb
    return [gcb, lcm]
}