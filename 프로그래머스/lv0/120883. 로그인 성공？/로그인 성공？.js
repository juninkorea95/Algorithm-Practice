function solution(id_pw, db) {
    for ([id,pw] of db) {
        if (id_pw[0]=== id) {
            if (id_pw[1] === pw) {
                return 'login'
            } else return 'wrong pw'
        } 
    } return 'fail'
}