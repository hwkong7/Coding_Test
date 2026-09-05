function solution(n) {
    var answer = Math.floor(n/7);
    //= Math.ceil(n/7)
    
    //나머지가 하나라도 있으면 (0 아니면) + 1
    if (n%7 !== 0){
        answer += 1;
    }
    return answer;
}