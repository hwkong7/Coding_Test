function solution(a, b) {
    var answer = 0;
    var plus = Number(String(a) + String(b));
    var multi = 2*a*b;
    if (plus > multi){
        answer = plus;
    } else {
        answer = multi;
    }
    return answer;
}