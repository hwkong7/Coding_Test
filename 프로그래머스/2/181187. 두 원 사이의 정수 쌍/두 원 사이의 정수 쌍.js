function solution(r1, r2) {
    let answer = 0;
    
    for (let x = 1; x <= r2; x++) {
        let outerY = Math.floor(Math.sqrt(r2 * r2 - x * x));
        
        let innerY = 0;
        if (r1 * r1 - x * x > 0) {
            innerY = Math.ceil(Math.sqrt(r1 * r1 - x * x));
        }
        
        answer += outerY - innerY + 1;
    }
    
    return answer * 4;
}