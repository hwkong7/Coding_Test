function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i<= n-1; i++){
        answer += my_string[i];
    }
    return answer;
}