function solution(n) {
    var answer = [];
    
    // 1부터 시작해서 2씩 증가 (1, 3, 5, 7...)
    for (let i = 1; i <= n; i += 2) {
        answer.push(i);
    }
    
    return answer;
}