function solution(n) {
    var answer = 0;
    if (n % 2 === 1) { // 홀수일 때
        for (let i = 1; i <= n; i += 2) { //1,3,5,7,...
            answer += i;
        }
    } else { // 짝수일 때
        for (let i = 2; i <= n; i += 2) { //2,4,6,8,...
            answer += i * i;
        }
    }
    return answer;
}
